import React, { useState } from "react";
import { FaSearch, FaWallet } from "react-icons/fa";
import logo from '../../assets/Nexuslogo.png';
import heroImage from "../../assets/Heroimage.png";
import { Link as RouterLink } from 'react-scroll';
import { Link } from 'react-router-dom';


function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo-container">
          <img src={logo} alt="Nexus Logo" className="logo" />
        </div>

        {/* Search Bar */}
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

       {/* Navigation */}
      <nav>
      <RouterLink to="target-section" smooth={true} duration={700}>
        <button class="nav-button">Explore</button>
      </RouterLink>
        <Link to="./login">
           <button class="nav-button">Login</button>
        </Link>
        <button class="connect-wallet">
          <span class="wallet-icon"><i class="fa fa-wallet"></i></span>Connect Wallet
        </button>
      </nav>
    </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Text Section */}
        <div className="text-section">
          <h1>Empowering Lives Through Blockchain</h1>
          <p>
            Discover a transformative learning experience that merges education,
            financial stability, and career growth - all powered by blockchain
            technology.
          </p>
          <div className="button-container">
             <RouterLink to="target-section" smooth={true} duration={700}>
             <button>Explore More</button>
             </RouterLink>

             <Link to="/courses">
                <button className="get-started-btn">Get Started</button>
             </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={heroImage} alt="Person studying" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
