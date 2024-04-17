import React from "react";
import "./styles/style.css";

const BoardMenu = ({ board }) => {
  const handleDeleteBoard = () => {
    // Handle delete board logic
  };

  return (
    <div className="board-menu">
      <button onClick={handleDeleteBoard}>Delete Board</button>
      {/* Other board options */}
    </div>
  );
};

export default BoardMenu;
