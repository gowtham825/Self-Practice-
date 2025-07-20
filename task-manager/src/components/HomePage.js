import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaRocket, FaMoon, FaSun } from 'react-icons/fa';

const HomePage = ({ darkMode, setDarkMode }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="position-absolute top-0 end-0 m-3 z-3">
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

          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <div className="mb-4">
                  <FaTasks 
                    size={80} 
                    className={`mb-3 ${darkMode ? 'text-info' : 'text-primary'}`} 
                  />
                  <h1 className={`display-5 fw-bold ${darkMode ? 'text-light' : ''}`}>
                    Task Manager Pro
                  </h1>
                  <p className={`lead ${darkMode ? 'text-muted' : 'text-muted'}`}>
                    Organize, Prioritize, and Accomplish Your Tasks with Ease
                  </p>
                </div>

                <div className={`card ${darkMode ? 'bg-secondary text-light' : 'shadow-lg'}`}>
                  <div className="card-body p-3 p-md-5">
                    <h2 className="card-title mb-4">About the Project</h2>
                    <p className="card-text mb-4">
                      Task Manager Pro is a powerful and intuitive task management application 
                      designed to help you stay organized and productive.
                    </p>

                    <div className="row g-3">
                      {['Drag and Drop Task Reordering', 'Priority-based Task Management', 
                        'Dark Mode Support', 'Simple and Intuitive Interface'].map((feature, index) => (
                        <div key={index} className="col-12 col-md-6">
                          <div className="d-flex align-items-center">
                            <FaTasks className={`me-2 ${darkMode ? 'text-info' : 'text-primary'}`} />
                            <span className="small">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/app" 
                      className={`btn ${darkMode ? 'btn-info' : 'btn-primary'} btn-lg mt-4 w-100 w-md-auto`}
                    >
                      <FaRocket className="me-2" />
                      Open Task Manager
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;