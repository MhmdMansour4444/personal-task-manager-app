
import React from "react";
import { useParams } from "react-router-dom";
import Column from "./Column";
import mockData from "./mockData"; 
import "./style.css";

const Columns = () => {
  const { boardId } = useParams();
  const columns = mockData; 

  return (
    <div className="columns">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};

export default Columns;
