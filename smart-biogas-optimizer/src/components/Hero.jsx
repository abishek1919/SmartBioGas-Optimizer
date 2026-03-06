import { motion } from "framer-motion";
import biogasIllustration from "../assets/biogas.svg";

function Hero({ onStart }) {
  return (
    <section id="home" className="mx-auto mt-8 grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:items-center md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          Renewable Process Intelligence
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          Smart Biogas Optimization Platform
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
          Enhancing methane yield through intelligent process analysis.
        </p>
        <button
          onClick={onStart}
          className="mt-7 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-panel transition hover:bg-brand-700"
        >
          Start Optimization
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-4"
      >
        <img src={biogasIllustration} alt="Biogas digester system illustration" className="w-full rounded-2xl" />
      </motion.div>
    </section>
  );
}

export default Hero;
