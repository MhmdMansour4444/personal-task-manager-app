import React from "react";
import Header from "./Components/Header";
import "./style.css";
import Dashboard from "./Components/Dashboard";

const Home = () => {
  return (
    <div className="main-dashboard">
      <Header />
      <div className="dashboard-content">
        <Dashboard/>
      </div>
    </div>
  );
};

export default Home;
