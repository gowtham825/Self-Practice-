import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";

const AddTask = ({ setTasks }) => {
  const [task, setTask] = useState({ title: "", description: "", priority: "Low" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    setTasks((prev) => [...prev, { ...task, id: uuidv4(), completed: false }]);
    setTask({ title: "", description: "", priority: "Low" });
  };
  const AddTask = ({ setTasks, darkMode }) => {
    const [task, setTask] = useState({ 
      title: "", 
      description: "", 
      priority: "Low",
      createdAt: null
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!task.title.trim()) return;
      
      const newTask = {
        ...task,
        id: uuidv4(),
        completed: false,
        createdAt: new Date().toISOString()
      };
  
      setTasks((prev) => [...prev, newTask]);
      setTask({ 
        title: "", 
        description: "", 
        priority: "Low",
        createdAt: null
      });
    };
}

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Add New Task</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text"><FaPlus /></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Task Title" 
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="col-12">
              <textarea 
                className="form-control" 
                placeholder="Task Description (Optional)"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                rows="3"
              />
            </div>
            
            <div className="col-12">
              <select 
                className="form-select" 
                value={task.priority} 
                onChange={(e) => setTask({ ...task, priority: e.target.value })}
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                <FaPlus className="me-2" /> Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;