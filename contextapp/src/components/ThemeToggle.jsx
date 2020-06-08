import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle the theme</button>;
}
