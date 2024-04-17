import React from "react";
import Board from "./Board";
import "./styles/style.css";

const BoardList = () => {
  // Mock data for boards
  const boards = [
    { id: 1, title: "Project A" },
    { id: 2, title: "Project B" },
    { id: 3, title: "Project C" },
  ];

  return (
    <div className="board-list">
      {boards.map((board) => (
        <div key={board.id}>
          <Board board={board} />
        </div>
      ))}
    </div>
  );
};

export default BoardList;
