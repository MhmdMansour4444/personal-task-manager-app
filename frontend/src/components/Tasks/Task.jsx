import React from "react";

const Task = ({ task }) => {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => handleDragStart(e, task.id)}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
