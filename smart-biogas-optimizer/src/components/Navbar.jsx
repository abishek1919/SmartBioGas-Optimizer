import { motion } from "framer-motion";

function Navbar({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold text-brand-700 dark:text-brand-300">
          <span className="inline-block h-3 w-3 rounded-full bg-brand-500" />
          SmartBioGas
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex dark:text-slate-200">
          <a href="#home" className="transition hover:text-brand-600 dark:hover:text-brand-300">Home</a>
          <a href="#dashboard" className="transition hover:text-brand-600 dark:hover:text-brand-300">Dashboard</a>
          <a href="#about" className="transition hover:text-brand-600 dark:hover:text-brand-300">About</a>
        </nav>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onToggleTheme}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </motion.button>
      </div>
    </header>
  );
}

export default Navbar;
