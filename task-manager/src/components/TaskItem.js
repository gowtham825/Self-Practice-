import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useDrag } from "react-dnd";

const TaskItem = ({ task, setTasks, index, setDraggedItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, index },
    end: (_, monitor) => {
      if (monitor.didDrop()) {
        setDraggedItem((prev) => ({ ...prev, targetIndex: index }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <li
      ref={drag}
      className={`list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center ${
        isDragging ? "opacity-50" : ""
      } ${task.completed ? "bg-light text-muted" : ""}`}
      style={{ cursor: "grab" }}
      onMouseDown={() => setDraggedItem({ id: task.id, index })}
    >
      <div className="d-flex flex-column flex-grow-1 mb-2 mb-md-0">
        <div className="d-flex align-items-center">
          <h5 className={`mb-1 me-2 ${task.completed ? "text-decoration-line-through" : ""}`}>
            {task.title}
          </h5>
          <span
            className={`badge ms-auto bg-${
              task.priority === "High" ? "danger" : task.priority === "Medium" ? "warning" : "success"
            }`}
          >
            {task.priority}
          </span>
        </div>
        {task.description && (
          <p className="mb-1 text-muted small">{task.description}</p>
        )}
      </div>
      <div className="btn-group" role="group">
        <button 
          className={`btn btn-sm ${task.completed ? 'btn-success' : 'btn-outline-success'}`} 
          onClick={toggleComplete}
        >
          <FaCheck />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteTask}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;