// src/components/dashboard/MyCourses.jsx
import React from "react";

function MyCourses() {
  return (
    <div className="my-courses">
      <h3 className="section-title">My Courses</h3>
      <div className="course-cards">
        {/* Card 1 */}
        <div className="course-card">
          <h4>Introduction of Blockchain</h4>
          <div className="course-progress">
            <span>70%</span>
            <span className="status ongoing">Ongoing</span>
          </div>
          <p>
            Duration: <span>5 Weeks</span>
          </p>
        </div>
        {/* Card 2 */}
        <div className="course-card">
          <h4>Bitcoin Ecosystem</h4>
          <div className="course-progress">
            <span>20%</span>
            <span className="status ongoing">Ongoing</span>
          </div>
          <p>
            Duration: <span>12 Weeks</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
