import React from "react";
import logo from '../../assets/Nexuslogo.png';
import Dashboard from '../../assets/dashboard.png';
import Courses from '../../assets/book.png';
import Progress from '../../assets/progress2.png';
import Comm from '../../assets/comm.png';
import Reward from '../../assets/rewardg.png';
import Cert from '../../assets/capg.png';
import Faq from '../../assets/faq.png';
import Logout from '../../assets/logout.png';
import { Link } from 'react-router-dom';



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
            <img  src={Dashboard} />
             Dashboard
          </li>
          <li>
          <img  src={Courses} />
           My Courses
          </li>
          <li>
          <img  src={Progress} />
          Learning Progress
          </li>
          <li>
          <img  src={Comm} />
           Community
          </li>
          <li>
          <img  src={Reward} />
           Reward
          </li>
          <li>
          <img  src={Cert} />
            Certificate
          </li>
          <li className="last">
          <img  src={Faq} />
           Support & FAQ
          </li>
          <Link style={{ textDecoration: "none" }} to="/">
              <li id="disconnect">
              <img  src={Logout} />
                Back To Home
              </li>
          </Link>
          {/* Add more menu items as needed */}
        </ul>
          <div className="last-div">
       <p>ehe</p>
      </div>
      </nav>
     

    </div>
  );
}

export default Sidebar;
