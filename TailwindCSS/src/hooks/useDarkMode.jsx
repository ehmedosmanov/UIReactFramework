import { useEffect } from "react";
import { useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : false
  );

  const changeThemeMode = () => {
    document.body.classList.toggle("dark");
    setTheme(!theme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return { theme, changeThemeMode };
}

export default useDarkMode;
