import React from "react";
import RewardIcon from "../../assets/reward2.png"
import Progress from "../../assets/progress.png"
import Growth from "../../assets/growth.png"




function LevelUp() {
  return (
    <section className="level-up">
      <h2>Learn, Level Up, Lead</h2>
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="icon">
            <img
              src={RewardIcon}
              alt="Reward Icon "
            />
          </div>
          <p>Earn XP for completing lessons, quizzes, and challenges.</p>
          <a href="#">Read More</a>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="icon">
            <img
              src={Progress}
              alt="Progress Icon"
            />
          </div>
          <p>Track your progress and climb the leaderboard.</p>
          <a href="#">Read More</a>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="icon">
            <img
              src={Growth}
              alt="Reward Icon"
            />
          </div>
          <p>Redeem XP for rewards that help you grow even further.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default LevelUp;
