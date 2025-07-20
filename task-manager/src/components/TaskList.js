import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { useDrop } from "react-dnd";

const TaskList = ({ tasks, setTasks }) => {
  const [draggedItem, setDraggedItem] = useState(null);

  const [, drop] = useDrop({
    accept: "TASK",
    drop: () => {
      if (draggedItem !== null) {
        const updatedTasks = [...tasks];
        const movedTask = updatedTasks.splice(draggedItem.index, 1)[0];
        updatedTasks.splice(draggedItem.targetIndex, 0, movedTask);
        setTasks(updatedTasks);
        setDraggedItem(null);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className="card shadow-sm">
      <div className="card-body p-0">
        <ul ref={drop} className="list-group list-group-flush">
          {tasks.length === 0 ? (
            <li className="list-group-item text-center text-muted py-3">
              No tasks yet. Add a new task to get started!
            </li>
          ) : (
            tasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                setTasks={setTasks}
                index={index}
                setDraggedItem={setDraggedItem}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;