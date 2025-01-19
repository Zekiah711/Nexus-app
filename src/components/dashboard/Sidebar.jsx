import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import logo from '../../assets/Nexuslogo.png';
import Dashboard from '../../assets/dashboard.png';
import Courses from '../../assets/book.png';
import Wallet from '../../assets/wallet.png';
import Comm from '../../assets/comm.png';
import Reward from '../../assets/rewardg.png';
import Cert from '../../assets/capg.png';
import Faq from '../../assets/faq.png';
import Logout from '../../assets/logout.png';


function Sidebar({ isOpen, toggleSidebar }) {

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="close-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/courses" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Courses} alt="Courses" />
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Dashboard} alt="Dashboard" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Comm} alt="Community" />
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallet" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Wallet} alt="Wallet" />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reward" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Reward} alt="Reward" />
              Reward
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificate" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Cert} alt="Certificate" />
              Certificate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Faq} alt="FAQ" />
              Support & FAQ
            </NavLink>
          </li>
          <li id="disconnect">
            <NavLink
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleSidebar}
            >
              <img src={Logout} alt="Logout" />
              Back To Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
