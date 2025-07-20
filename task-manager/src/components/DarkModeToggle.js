import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "enabled");

  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-light", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <button 
      className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} mb-3 d-flex align-items-center`} 
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? (
        <>
          <FaSun className="me-2" /> Light Mode
        </>
      ) : (
        <>
          <FaMoon className="me-2" /> Dark Mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;