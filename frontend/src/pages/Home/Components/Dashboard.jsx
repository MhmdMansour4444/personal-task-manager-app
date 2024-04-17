import React from 'react';
import Boards from '../../../components/Boards/Boards';
import "../../../components/Boards/styles/style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>JURIA</h1>
      <Boards/>
    </div>
  );
};

export default Dashboard;