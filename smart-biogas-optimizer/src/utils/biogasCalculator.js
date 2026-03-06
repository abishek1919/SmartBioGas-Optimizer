export const DEFAULT_INPUTS = {
  wasteType: "Cow Dung",
  temperature: 33,
  pH: 7,
  cnRatio: 25,
  digesterVolume: 12,
  retentionTime: 25,
};

const wasteFactorMap = {
  "Cow Dung": 1,
  "Food Waste": 1.18,
  "Agricultural Waste": 0.9,
  "Mixed Organic Waste": 1.08,
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function calculateBiogasMetrics(inputs) {
  const {
    wasteType,
    temperature,
    pH,
    cnRatio,
    digesterVolume,
    retentionTime,
  } = inputs;

  const wasteFactor = wasteFactorMap[wasteType] || 1;
  let score = 100;
  const recommendations = [];

  if (temperature < 30) {
    score -= 24;
    recommendations.push("Increase temperature to around 35C for faster digestion.");
  } else if (temperature > 40) {
    score -= 20;
    recommendations.push("Lower temperature below 40C to avoid microbial stress.");
  } else if (temperature < 33 || temperature > 37) {
    score -= 8;
    recommendations.push("Fine-tune temperature closer to 35C for peak methane yield.");
  }

  if (pH < 6.5 || pH > 7.8) {
    score -= 25;
    recommendations.push("Adjust pH between 6.8 and 7.5 to stabilize methanogens.");
  } else if (pH < 6.8 || pH > 7.5) {
    score -= 10;
    recommendations.push("Slightly tune pH to the preferred 6.8-7.5 range.");
  }

  if (cnRatio < 20 || cnRatio > 30) {
    score -= 16;
    recommendations.push("Maintain C:N ratio between 20 and 30 using balanced feedstock.");
  }

  if (retentionTime < 18) {
    score -= 14;
    recommendations.push("Increase retention time to improve substrate conversion.");
  } else if (retentionTime > 40) {
    score -= 6;
    recommendations.push("Retention time is high; check throughput optimization.");
  }

  if (digesterVolume < 5) {
    score -= 10;
    recommendations.push("Consider increasing digester volume for stable gas output.");
  }

  const efficiencyScore = clamp(Math.round(score), 35, 98);
  const methaneYield = clamp(Math.round(45 + efficiencyScore * 0.34), 45, 80);

  const productionBase = digesterVolume * 0.13;
  const processFactor = efficiencyScore / 100;
  const methaneFactor = methaneYield / 100;
  const biogasProduction = Number(
    (productionBase * wasteFactor * processFactor * (0.75 + methaneFactor)).toFixed(2)
  );

  if (!recommendations.length) {
    recommendations.push("Operating conditions are close to optimal. Maintain current settings.");
  }

  const tempCurve = [25, 28, 30, 32, 35, 37, 40, 42].map((t) => {
    const distance = Math.abs(35 - t);
    const value = clamp(74 - distance * 3.8 + wasteFactor * 2, 40, 78);
    return Number(value.toFixed(1));
  });

  const productionTrend = Array.from({ length: 7 }).map((_, index) => {
    const dayImpact = 0.92 + index * 0.025;
    const variation = index % 2 === 0 ? 0.04 : -0.03;
    const dayValue = biogasProduction * dayImpact * (1 + variation);
    return Number(dayValue.toFixed(2));
  });

  return {
    methaneYield,
    biogasProduction,
    efficiencyScore,
    recommendations,
    chartData: {
      temperatureLabels: ["25", "28", "30", "32", "35", "37", "40", "42"],
      methaneVsTemp: tempCurve,
      productionLabels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
      productionTrend,
    },
  };
}
