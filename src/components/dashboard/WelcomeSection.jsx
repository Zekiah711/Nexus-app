// src/components/dashboard/WelcomeSection.jsx
import React from "react";
import Cert from "../../assets/hat.png"
import Reward from "../../assets/reward2.png"
import Ongoing from "../../assets/ongoing.png"
import Complete from "../../assets/finished.png"

function WelcomeSection() {
  return (
    <div className="welcome-back">
  <h3 className="welcome-title">Welcome Back</h3>
  <div className="welcome-stats">
    <div className="stat-card">
      <img src={Ongoing} alt="" />
      <div>
        <p>Ongoing courses</p>
        <h4>2</h4>
        <span>20 Modules</span>
      </div>
    </div>
    <div className="stat-card">
      <img src={Complete} alt="" />
      <div>
        <p>Completed courses</p>
        <h4>0</h4>
        <span>2 Courses</span>
      </div>
    </div>
    <div className="stat-card">
       <img src={Cert} alt="" />
      <div>
        <p>Certificate earned</p>
        <h4>0</h4>
        <span>2 Courses</span>
      </div>
    </div>
    <div className="stat-card">
       <img src={Reward} alt="" />
      <div>
        <p>Reward earned</p>
        <h4>0</h4>
        <span>2 Courses</span>
      </div>
    </div>
  </div>
</div>

  );
}

export default WelcomeSection;
