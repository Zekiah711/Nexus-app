import React from "react";
import startImage from "../../assets/getstarted.png";
import { Link } from "react-scroll";


function GetStarted() {
  return (
    <section className="get-started">
      <div className="content">
        <h2>Get Started For Free</h2>
        <p className="subtitle">Take your first step today</p>
        <p className="description">
          Join Nexus and unlock a world of opportunities. Get started by
          clicking the <a href="#">connect wallet</a> button to start learning,
          earning, and growing.
        </p>
        <Link to="target-section" smooth={true} duration={500}>
        <button className="enroll-button">Enroll Now</button>
        </Link>
      </div>
      <div className="image">
         <img src={startImage} alt="Student With Book" /> {/* Use your new image */}
      </div>
    </section>
  );
}

export default GetStarted;
