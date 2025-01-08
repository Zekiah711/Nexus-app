import React from "react";
import Guy from "../../assets/guy.png"
import Pc from "../../assets/laptop.png"
import Vector from "../../assets/Vector.png"
import Hat from "../../assets/hat.png"




function ElearningFeatures() {
  return (
    <section className="elearning-features">
      <h2 className="elearning-title">E-Learning Made Simple And Impactful</h2>
      <div className="elearning-grid">
        <div className="feature-item">
          <div className="feature-icon">
          <img src={Guy} alt="" />
          </div>
          <p>Live courses taught by industry experts</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
          <img src={Pc} alt="" />
          </div>
          <p>Self-paced modules with actionable insights</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
          <img src={Vector} alt="" />
          </div>
          <p>Exclusive resources and templates to accelerate your growth</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={Hat} alt="" />
          </div>
          <p>Earn a certificate of completion afterward</p>
        </div>
      </div>
    </section>
  );
}

export default ElearningFeatures;
