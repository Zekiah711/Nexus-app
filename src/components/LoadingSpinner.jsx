import React from "react";
import logo from '../assets/Nexuslogo.png';
import './loadspinner.css'

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="loading-logo" />
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
