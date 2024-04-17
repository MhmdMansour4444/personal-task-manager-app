import React from "react";
import "./styles/style.css";

const BoardMenu = ({ board }) => {
  const handleDeleteBoard = () => {
    // Handle delete board logic, couldnt do it yet
  };

  return (
    <div className="board-menu">
      <button onClick={handleDeleteBoard}>Delete Board</button>
    </div>
  );
};

export default BoardMenu;
