// src/components/dashboard/SimilarCourses.jsx
import React, { useState, useEffect } from "react";
import Pm from "../../assets/project.png";
import Token from "../../assets/tokenko.png";
import Smart from "../../assets/smartc.png";




function SimilarCourses() {

        const [showButton, setShowButton] = useState(false);
       
         // Function to handle scroll-to-top
         const scrollToTop = () => {
           window.scrollTo({
             top: 0,
             behavior: "smooth",
           });
         };
       
         // Show/hide button on scroll
         useEffect(() => {
           const handleScroll = () => {
             if (window.scrollY > 500) {
               setShowButton(true);
             } else {
               setShowButton(false);
             }
           };
       
           window.addEventListener("scroll", handleScroll);
           return () => window.removeEventListener("scroll", handleScroll);
         }, []);
       

  return (
    <div className="similar-container">
      <h3 className="similar-title">Similar Courses for You</h3>
      <div className="similar-grid">
        <div className="similar-card">
          <img
            src={Pm}
            alt="Project Management"
            className="similar-image"
          />
          <h4 className="similar-card-title">Project Management</h4>
          <p className="similar-detail">
            Modules: <span>10</span>
          </p>
          <p className="similar-detail">
            Duration: <span>15 Weeks</span>
          </p>
          <button className="similar-enroll-btn">Enroll Now</button>
        </div>
        <div className="similar-card">
          <img
            src={Token}
            alt="Tokenomics"
            className="similar-image"
          />
          <h4 className="similar-card-title">Tokenomics</h4>
          <p className="similar-detail">
            Modules: <span>15</span>
          </p>
          <p className="similar-detail">
            Duration: <span>10 Weeks</span>
          </p>
          <button className="similar-enroll-btn">Enroll Now</button>
        </div>
        <div className="similar-card">
          <img
            src={Smart}
            alt="Smart Contract Development"
            className="similar-image"
          />
          <h4 className="similar-card-title">Smart Contract Development</h4>
          <p className="similar-detail">
            Modules: <span>20</span>
          </p>
          <p className="similar-detail">
            Duration: <span>20 Weeks</span>
          </p>
          <button className="similar-enroll-btn">Enroll Now</button>
        </div>
      </div>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⏏
        </button>
      )}
    </div>
  );
}

export default SimilarCourses;
