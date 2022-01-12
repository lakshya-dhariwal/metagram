import React, { useState } from "react";
import Nav from "./components/Nav/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`App   ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-slate-50 font-sans dark:bg-black ">
        <header className="App-header">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
      </div>
    </div>
  );
}

export default App;
