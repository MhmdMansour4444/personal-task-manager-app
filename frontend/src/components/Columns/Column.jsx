// Column.jsx

import React from "react";
import Task from "../Tasks/Task";

const Column = ({ column }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const columnId = e.currentTarget.getAttribute("data-column-id");
    if (taskId && columnId === column.id.toString()) {

      console.log("Dropped task with ID:", taskId, "into column:", column.title);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="column"
      data-column-id={column.id}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h3>{column.title}</h3>
      <div className="task-list">
        {column.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
