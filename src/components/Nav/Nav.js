import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle.js";
function Nav({ darkMode, setDarkMode }) {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center p-2">
        <span className="">
          <img src="meta.svg" alt="" width={100} />
        </span>
      </div>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
}

export default Nav;
