import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import MyCourses from "./MyCourses";
import SimilarCourses from "./SimilarCourses";
import RightPanel from "./RightPanel";
import "../../dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Sidebar />
      <div className="main-content">
        <WelcomeSection />
        <MyCourses />
        <SimilarCourses />
      </div>
      <RightPanel />
    </div>
  );
}

export default Dashboard;


