import React from "react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  const darkModeToggle = (e) => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  return (
    <div>
      <div className="dark-toggle flex items-center justify-center mr-2">
        <label for="dark" className="flex items-center cursor-pointer">
          <div className="relative ">
            <input
              classNmae="flex items-center justify-center"
              type="checkbox"
              id="dark"
              className="sr-only"
              onChange={darkModeToggle}
              value={darkMode}
              checked={darkMode}
            />
            <div className="block bg-gray-900 border w-12 h-7 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition">
              <img src={darkMode ? "dark.png" : "light.png"} alt="" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default DarkModeToggle;
