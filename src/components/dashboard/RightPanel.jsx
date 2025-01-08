import React from 'react';
import SectionHeader from './SectionHeader';
import ListItem from './ListItem';
import ProgressBar from './ProgressBar';
import Assin from '../../assets/assin.png'
import Quiz from '../../assets/quiz.png'

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Upcoming Assignment Section */}
      <div className="r-section">
        <div className='learn'>
        <img src={Assin} alt="" />
        <SectionHeader title="Upcoming Assignment" />
        </div>
        <ListItem
          title="Check your assignment"
          subtitle="Due in 5 days"
        />
      </div>

      {/* Upcoming Quiz Section */}
      <div className="r-section">
        <div className='learn'>
        <img src={Quiz} alt="" />
        <SectionHeader title="Upcoming Quiz" />
        </div>
        <ListItem title="Check for quiz" subtitle="Due in 2 days" />
      </div>

      {/* Continue Learning Section */}
      <div className="r-section push">
        <SectionHeader title="Continue Learning" />
        <div className="learning-item">
          <p>What is Blockchain?</p>
          <ProgressBar value={40} max={100} />
        </div>
        <div className="learning-item">
          <p>How to set up Web3 Wallet</p>
          <ProgressBar value={40} max={100} />
        </div>
        <div className="learning-item">
          <p>How to use Web3 Tools</p>
          <ProgressBar value={80} max={100} />
        </div>
      </div>

      {/* Community Member Section */}
      <div className="r-section">
          <h4 className="only-me">Connect</h4>
           <div className='spread'>
             <p className='sep'>Check other members of your community</p>
          </div>
      </div>
    </div>
  );
};

export default RightPanel;
