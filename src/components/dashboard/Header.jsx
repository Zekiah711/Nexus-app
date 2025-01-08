import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Make sure Sidebar is correctly imported
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa"; // Import the icons
import logo from "../../assets/Nexuslogo.png"; // Import logo image (adjust path as needed)


function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="header-container">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <img src={logo} alt="Logo" className="header-logo" />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

     <div className="header-content">
        {/* Search Field */}
        <div className="search-bar">
          <div className="search-icon-wrapper">
             <FaSearch className="search-icon" />
          </div>
              <input
                 type="text"
                 placeholder="search for courses"
                 value={searchValue}
                 onChange={handleInputChange}
              />
        </div>

        {/* User Profile */}
        <div className="profile-section">
          {/* Bell Notification Icon */}
          <FaBell className="profile-icon" />
          {/* Profile Icon */}
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
