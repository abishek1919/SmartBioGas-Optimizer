import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InputForm from "../components/InputForm";
import PredictionCard from "../components/PredictionCard";
import RecommendationPanel from "../components/RecommendationPanel";
import AnalyticsChart from "../components/AnalyticsChart";
import Footer from "../components/Footer";
import { calculateBiogasMetrics, DEFAULT_INPUTS } from "../utils/biogasCalculator";

function Dashboard({ isDark, onToggleTheme }) {
  const [result, setResult] = useState(() => calculateBiogasMetrics(DEFAULT_INPUTS));

  const handleAnalyze = (inputs) => {
    const analysis = calculateBiogasMetrics(inputs);
    setResult(analysis);
  };

  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <Hero onStart={scrollToDashboard} />

      <main className="mx-auto mt-10 flex max-w-7xl flex-col gap-8 px-4 pb-8 md:px-8">
        <InputForm onAnalyze={handleAnalyze} />
        <PredictionCard result={result} />
        <RecommendationPanel recommendations={result?.recommendations} />
        <AnalyticsChart chartData={result?.chartData} />
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
