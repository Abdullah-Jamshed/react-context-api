import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Text from "./Text";

const ContextDemo = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: `${theme === "light" ? "#fff" : "#000"} ` }} className='bg'>
      <Text>{theme}</Text>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className='btn'>
        toggle theme
      </button>
    </div>
  );
};

export default ContextDemo;
