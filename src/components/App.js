import React, { useState } from "react";
import "../styles/App.css";
import ThemeProvider from "../context/ThemeContext.js";
import ContextDemo from "./ContextDemo";

function App() {
  const [heading, setHeading] = useState("REACT CONTEXT API");
  return (
    <div className='App'>
      <h1>{heading}</h1>
      <ThemeProvider>
        <ContextDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
