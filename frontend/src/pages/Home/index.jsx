import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import "./style.css";

const Home = () => {
  return (
    <div className="main-dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
