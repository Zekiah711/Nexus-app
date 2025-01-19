import React from "react";



function CourseCard({ image, title, modules, xpPoints, duration, level }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image"  />
      <div className="course-card-content">
        <h3>{title}</h3>
        <p>{modules} Modules</p>
        <p className="xp-points">{xpPoints} XP Points</p>
        <p>Duration: {duration}</p>
        {level && <p className="level">{level}</p>}
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
}

export default CourseCard;
