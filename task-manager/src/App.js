import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TaskManager from './components/TaskManager';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "enabled");

  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-light", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className={`App min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} 
            />
            <Route 
              path="/app" 
              element={<TaskManager darkMode={darkMode} setDarkMode={setDarkMode} />} 
            />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;