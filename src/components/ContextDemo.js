import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Text from "./Text";

const ContextDemo = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div style={{ backgroundColor: `${theme === "light" ? "#fff" : "#000"} ` }} className='bg'>
      <Text>{theme}</Text>
      <button onClick={toggle} className='btn'>
        Toggle Theme
      </button>
    </div>
  );
};

export default ContextDemo;
