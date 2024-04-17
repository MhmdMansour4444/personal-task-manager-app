import React from "react";
import BoardList from "./BoardList";
import "./styles/style.css";

const Boards = () => {
  return (
    <div className="boards">
      <h2>Boards</h2>
      <BoardList />
    </div>
  );
};

export default Boards;
