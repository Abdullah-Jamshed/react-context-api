import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Text = () => {
  const { theme } = useContext(ThemeContext);

  return <h1 style={{ color: `${theme === "light" ? "#000" : "#fff"}` }}>{theme}</h1>;
};

export default Text;
