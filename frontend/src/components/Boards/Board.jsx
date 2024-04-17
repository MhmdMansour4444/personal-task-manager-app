import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Board = ({ board }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "SetBoard",
      payload: board,
    });
  };

  return (
    <div className="board">
      <h2>{board.title}</h2>
      <Link to={`/columns/${board.id}`} onClick={handleClick}>
        View Columns
      </Link>
    </div>
  );
};

export default Board;
