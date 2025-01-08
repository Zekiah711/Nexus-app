import React from "react";
import featuresImage from "../../assets/featuresimage.png";


function Features() {
  return (
    <section className="our-features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        <div className="features-text">
          <h3>Blockchain-Powered Transparency</h3>
          <p>
            Every interaction on Nexus is secured and transparent, <br />ensuring your learning journey is not only valuable but trustworthy.
          </p>
          <a href="#" className="read-more-btn">Read More</a>
        </div>
        <div className="features-image">
        <img src={featuresImage} alt="Blockchain Image" /> {/* Use your new image */}
        </div>
      </div>
    </section>
  );
}

export default Features;
