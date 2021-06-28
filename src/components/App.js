import React from "react";
import "../styles/App.css";
import ThemeProvider from "../context/ThemeContext.js";
import ContextDemo from "./ContextDemo";

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <ContextDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
