import React from 'react';

const ProgressBar = ({ value, max }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
