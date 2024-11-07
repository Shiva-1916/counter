import React, { useState, useMemo } from "react";

function ThemeChanger() {
  const [theme, setTheme] = useState("light");
  const [toggle,setToggle] = useState(true)

  // Memoize theme styles
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: toggle ? "#ffffff" : "#333333",
      textAlign: "center"
    };
  }, [toggle]); // Only recompute styles when theme changes

  const toggleTheme = () => {
    setToggle(!toggle)
  };

  return (
    <div style={themeStyles}>
      <h1>{toggle? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default ThemeChanger;
