import { motion } from "framer-motion";

function RecommendationPanel({ recommendations = [] }) {
  if (!recommendations.length) return null;

  return (
    <section>
      <h2 className="section-title">Optimization Recommendations</h2>
      <p className="section-subtitle">Actionable suggestions generated from the current digester conditions.</p>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {recommendations.map((item, index) => (
          <motion.article
            key={`${item}-${index}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl p-4"
          >
            <p className="text-sm text-slate-700 dark:text-slate-200">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default RecommendationPanel;
