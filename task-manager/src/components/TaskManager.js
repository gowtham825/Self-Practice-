import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter'; // New component
import { FaHome, FaMoon, FaSun } from 'react-icons/fa';

const TaskManager = ({ darkMode, setDarkMode }) => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: 'date',
    filterPriority: 'All',
    filterStatus: 'All',
    searchQuery: ''
  });

  // Advanced filtering and sorting logic
  const filteredAndSortedTasks = useMemo(() => {
    let result = [...tasks];

    // Search filter
    if (filters.searchQuery) {
      result = result.filter(task => 
        task.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Priority filter
    if (filters.filterPriority !== 'All') {
      result = result.filter(task => task.priority === filters.filterPriority);
    }

    // Status filter
    if (filters.filterStatus === 'Completed') {
      result = result.filter(task => task.completed);
    } else if (filters.filterStatus === 'Pending') {
      result = result.filter(task => !task.completed);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'priority':
        result.sort((a, b) => {
          const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [tasks, filters]);

  return (
    <div className="container-fluid px-0">
      <div className="row g-0 justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 px-3 px-md-0">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 p-3">
            <Link 
              to="/" 
              className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'} mb-2 mb-md-0`}
            >
              <FaHome className="me-2" /> Back to Home
            </Link>
            <button 
              className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} d-flex align-items-center`} 
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
          </div>
          
          <div className="px-3 px-md-0">
            <TaskFilter 
              filters={filters} 
              setFilters={setFilters} 
              darkMode={darkMode} 
            />
            <AddTask 
              setTasks={setTasks} 
              darkMode={darkMode} 
            />
            <TaskList 
              tasks={filteredAndSortedTasks} 
              setTasks={setTasks} 
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;