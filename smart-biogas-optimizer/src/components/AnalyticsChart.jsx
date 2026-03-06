import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

function AnalyticsChart({ chartData }) {
  if (!chartData) return null;

  const methaneDataset = {
    labels: chartData.temperatureLabels,
    datasets: [
      {
        label: "Methane Yield (%)",
        data: chartData.methaneVsTemp,
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const productionDataset = {
    labels: chartData.productionLabels,
    datasets: [
      {
        label: "Biogas Production (m3/day)",
        data: chartData.productionTrend,
        backgroundColor: "rgba(20, 184, 166, 0.75)",
        borderRadius: 8,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#94a3b8" } },
    },
    scales: {
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.2)" },
      },
      x: {
        ticks: { color: "#94a3b8" },
        grid: { display: false },
      },
    },
  };

  return (
    <section>
      <h2 className="section-title">Analytics Charts</h2>
      <p className="section-subtitle">Visual simulation of methane performance and short-term production trend.</p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <article className="glass-card rounded-2xl p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-300">Methane Yield vs Temperature</h3>
          <div className="h-64">
            <Line data={methaneDataset} options={commonOptions} />
          </div>
        </article>

        <article className="glass-card rounded-2xl p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-300">Biogas Production Trend</h3>
          <div className="h-64">
            <Bar data={productionDataset} options={commonOptions} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default AnalyticsChart;
