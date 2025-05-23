import React, { useEffect, useState } from "react";

const themes = ["emerald", "dark", "light"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("verit-theme") || "emerald";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("verit-theme", theme);
  }, [theme]);

  return (
    <div className="fixeds top-3 right-3 z-50">
      <select
        className="select select-sm select-bordered"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}