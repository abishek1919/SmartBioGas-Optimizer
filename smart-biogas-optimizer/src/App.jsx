import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Dashboard isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
    </div>
  );
}

export default App;