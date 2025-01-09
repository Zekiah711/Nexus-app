import React, { useState, useEffect } from "react";
import logo from "../../assets/Nexuslogo.png";
import { Link } from "react-scroll";




function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll-to-top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-container">
        {/* Logo and Intro Section */}
        <div className="footer-about">
          <img src={logo} alt="Nexus Logo" className="footer-logo" />
          <p>
            Empowering learners with the tools and <br />
            knowledge to achieve their goals. Start your journey with us today!
          </p>
        </div>

        {/* Navigation Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li> 
            <li><a href="#about">About Us</a></li>
            <Link to="target-section" smooth={true} duration={500}><li>Courses</li></Link>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div> <br />

   

      <hr/>
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⏏
        </button>
      )}
    </footer>
  );
}

export default Footer;
