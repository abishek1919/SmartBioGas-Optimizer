import { motion } from "framer-motion";

function MetricCard({ title, value, hint, colorClass }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-4 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">{title}</h3>
        <span className={`h-3 w-3 rounded-full ${colorClass}`} />
      </div>
      <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>
    </motion.article>
  );
}

function PredictionCard({ result }) {
  if (!result) return null;

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <MetricCard title="Methane Yield" value={`${result.methaneYield}%`} hint="Estimated methane share" colorClass="bg-emerald-500" />
      <MetricCard title="Biogas Production" value={`${result.biogasProduction} m3/day`} hint="Predicted daily generation" colorClass="bg-teal-500" />
      <MetricCard title="Digester Efficiency" value={`${result.efficiencyScore}%`} hint="Overall process score" colorClass="bg-lime-500" />
    </section>
  );
}

export default PredictionCard;
