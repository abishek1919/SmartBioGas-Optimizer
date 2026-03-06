import { useState } from "react";
import { motion } from "framer-motion";
import { DEFAULT_INPUTS } from "../utils/biogasCalculator";

const wasteTypes = ["Cow Dung", "Food Waste", "Agricultural Waste", "Mixed Organic Waste"];

function InputForm({ onAnalyze }) {
  const [form, setForm] = useState(DEFAULT_INPUTS);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnalyze({
      ...form,
      temperature: Number(form.temperature),
      pH: Number(form.pH),
      cnRatio: Number(form.cnRatio),
      digesterVolume: Number(form.digesterVolume),
      retentionTime: Number(form.retentionTime),
    });
  };

  return (
    <motion.section
      id="dashboard"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card rounded-2xl p-6"
    >
      <h2 className="section-title">Digester Input Parameters</h2>
      <p className="section-subtitle">Provide current operating conditions to simulate methane and biogas output.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          <span>Waste Type</span>
          <select
            value={form.wasteType}
            onChange={(e) => updateField("wasteType", e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
          >
            {wasteTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium">
          <span>Temperature (C)</span>
          <input type="number" step="0.1" value={form.temperature} onChange={(e) => updateField("temperature", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900" />
        </label>

        <label className="space-y-2 text-sm font-medium">
          <span>pH Level</span>
          <input type="number" step="0.1" value={form.pH} onChange={(e) => updateField("pH", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900" />
        </label>

        <label className="space-y-2 text-sm font-medium">
          <span>Carbon Nitrogen Ratio (C:N)</span>
          <input type="number" step="1" value={form.cnRatio} onChange={(e) => updateField("cnRatio", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900" />
        </label>

        <label className="space-y-2 text-sm font-medium">
          <span>Digester Volume (m3)</span>
          <input type="number" step="0.1" value={form.digesterVolume} onChange={(e) => updateField("digesterVolume", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900" />
        </label>

        <label className="space-y-2 text-sm font-medium">
          <span>Retention Time (days)</span>
          <input type="number" step="1" value={form.retentionTime} onChange={(e) => updateField("retentionTime", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900" />
        </label>

        <div className="md:col-span-2">
          <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Analyze Biogas Production
          </motion.button>
        </div>
      </form>
    </motion.section>
  );
}

export default InputForm;
