import React from 'react';
import { FaFilter, FaSearch, FaSync } from 'react-icons/fa';

const TaskFilter = ({ filters, setFilters, darkMode }) => {
    // Function to reset all filters to their initial state
    const handleRefresh = () => {
        setFilters({
            sortBy: 'date',
            filterPriority: 'All',
            filterStatus: 'All',
            searchQuery: ''
        });
    };

    return (
        <div className={`card mb-3 ${darkMode ? 'bg-secondary text-light' : 'shadow-sm'}`}>
            <div className="card-body">
                <div className="row g-3">
                    {/* Search Input */}
                    <div className="col-12">
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search tasks..."
                                value={filters.searchQuery}
                                onChange={(e) => setFilters(prev => ({
                                    ...prev,
                                    searchQuery: e.target.value
                                }))}
                            />
                            {/* Refresh Button */}
                            <button
                                className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'}`}
                                onClick={handleRefresh}
                                title="Reset Filters"
                            >
                                <FaSync />
                            </button>
                        </div>
                    </div>

                    {/* Existing Filter and Sort Options */}
                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={filters.sortBy}
                            onChange={(e) => setFilters(prev => ({
                                ...prev,
                                sortBy: e.target.value
                            }))}
                        >
                            <option value="date">Sort by Date</option>
                            <option value="priority">Sort by Priority</option>
                            <option value="alphabetical">Sort Alphabetically</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={filters.filterPriority}
                            onChange={(e) => setFilters(prev => ({
                                ...prev,
                                filterPriority: e.target.value
                            }))}
                        >
                            <option value="All">All Priorities</option>
                            <option value="Low">Low Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="High">High Priority</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={filters.filterStatus}
                            onChange={(e) => setFilters(prev => ({
                                ...prev,
                                filterStatus: e.target.value
                            }))}
                        >
                            <option value="All">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskFilter;