import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";

function LearningAdventure() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveIndex(null); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonGroups = [
    ["Introduction to the Blockchain", "Bitcoin Blockchain", "Bitcoin Ecosystem", "Bitcoin Integration"],
    ["UI/UX Design Basics", "Figma Mastery", "Prototyping", "User Testing"],
    ["Frontend Basics", "ReactJS", "Backend APIs", "Fullstack Projects"],
    ["Intro to ChatGPT", "Prompt Engineering", "Machine Learning 101", "AI Ethics"],
    ["Copywriting Basics", "SEO Content", "Social Media Writing", "Content Strategy"],
  ];

  return (
    <Element name="target-section">
    <section className="learning-adventure">
      {/* Top Section */}
      <div className="learning-header">
      
      <h2>Start Your Learning Adventure Today</h2>
        <p>
          No matter your goals, whether it's to learn a fresh skill, or level up on <br />
          an existing skill, Nexus is your gateway to success.
        </p>

        {/* Navigation Links */}
        <nav className="learning-nav">
          <ul>
            {["Fundamentals Of Web3", "Design", "Web Development", "Chat GPT & Machine Learning", "Copywriting & Content Writing"].map((item, index) => (
              <li
                key={index}
                onClick={() => handleToggle(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Button Groups */}
      <div ref={containerRef}>
        {buttonGroups.map((buttons, index) => (
          <div
            key={index}
            className="learning-buttons"
            style={{ display: activeIndex === index ? "flex" : "none" }}
          >
            {buttons.map((button, buttonIndex) => (
              <button key={buttonIndex}>{button}</button>
            ))}
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
}

export default LearningAdventure;
