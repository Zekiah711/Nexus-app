import React from "react";
import LearnIcon from "../../assets/learn.png"
import RewardIcon from "../../assets/reward.png"
import CommunityIcon from "../../assets/community.png"




function WhyExplore(){
  return (
    <section className="why-explore">
      <div className="why-title">
        <h2>Why Explore Courses on Nexus</h2>
        <p>
          At Nexus, we believe knowledge is the key to unlocking limitless opportunities. That is why we have created a platform that does not just teach but inspires, rewards, and equips you to thrive.
        </p>
      </div>
      <div className="features">
        <div className="feature-card">
          <div className="icon">
            <img
              src={LearnIcon}
              alt="Learn Anytime, Anywhere Icon"
            />
          </div>
          <h3>Learn Anytime, Anywhere</h3>
          <p>
            Access world-class courses on Web3 education, Cryptocurrencies, and Blockchain Fundamentals all tailored to meet your needs... <a href="#">Read More</a>
          </p>
        </div>
        <div className="feature-card">
          <div className="icon">
            <img
              src={RewardIcon}
              alt="Earn As You Learn Icon"
            />
          </div>
          <h3>Earn As You Learn</h3>
          <p>
            Complete courses, earn XPs, and unlock exciting rewards. Your progress is celebrated and your commitment is rewarded... <a href="#">Read More</a>
          </p>
        </div>
        <div className="feature-card">
          <div className="icon">
            <img
              src={CommunityIcon}
              alt="Join A Community Icon"
            />
          </div>
          <h3>Join A Community</h3>
          <p>
            Connect with like-minded learners, collaborate on projects, and grow together in an ecosystem built on transparency and accountability... <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyExplore;
