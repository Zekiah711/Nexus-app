import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import "./Courses.css";
import Image1 from "./images/img1.png";
import Image2 from "./images/img2.png";
import Image3 from "./images/img3.png";
import Image4 from "./images/img4.png";
import Image5 from "./images/img5.png";
import Image6 from "./images/img6.png";
import Image7 from "./images/img7.png";
import Image8 from "./images/img8.png";
import Image9 from "./images/img9.png";
import Image10 from "./images/img10.png";
import Image11 from "./images/img11.png";
import Image12 from "./images/img12.png";
import Image13 from "./images/img13.png";
import Image14 from "./images/img14.png";
import Image15 from "./images/img15.png";
import Image16 from "./images/img16.png";
import Image17 from "./images/img17.png";
import Image18 from "./images/img18.png";
import Image19 from "./images/img19.png";
import Image20 from "./images/img20.png";
import Image21 from "./images/img21.png";
import Image22 from "./images/img22.png";
import Image23 from "./images/img23.png";
import Image24 from "./images/img24.png";
import Image25 from "./images/img25.png";
import Image26 from "./images/img26.png";
import Image27 from "./images/img27.png";
import Image28 from "./images/img28.png";
import Image29 from "./images/img29.png";
import Image30 from "./images/img30.png";
import Image31 from "./images/img31.png";
import Image32 from "./images/img32.png";
import Image33 from "./images/img33.png";
import Image34 from "./images/img34.png";





function Courses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Fundamentals Of Web3");

  const categories = [
    "Fundamentals Of Web3",
    "Design",
    "Web Development",
    "Chat GPT & Machine Learning",
    "Copywriting & Content Writing",
  ];

  const courses = [
    {
      id: 1,
      category: "Fundamentals Of Web3",
      title: "Introduction to Blockchain",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image1 ,
    },
    {
      id: 2,
      category: "Fundamentals Of Web3",
      title: "Bitcoin Blockchain",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image2,
    },
    {
      id: 3,
      category: "Fundamentals Of Web3",
      title: "Bitcoin Ecosystem",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image3,
    },
    {
      id: 4,
      category: "Fundamentals Of Web3",
      title: "Bitcoin Integration",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image4,
    },
    {
      id: 5,
      category: "Fundamentals Of Web3",
      title: "Project Managment (Beginner Level)",
      modules: 20,
      xpPoints: "100",
      duration: "20 Weeks",
      image: Image5,
    },
    {
      id: 6,
      category: "Fundamentals Of Web3",
      title: "Tokenomics (Beginner Level)",
      modules: 15,
      xpPoints: "100",
      duration: "10 Weeks",
      image: Image6,
    },
    {
      id: 7,
      category: "Fundamentals Of Web3",
      title: "Smart Contract Development (Beginner Level)",
      modules: 20,
      xpPoints: "1000",
      duration: "20 Weeks",
      image: Image7,
    },
    {
      id: 8,
      category: "Fundamentals Of Web3",
      title: "Community Managment (Beginner Level)",
      modules: 20,
      xpPoints: "100",
      duration: "20 Weeks",
      image: Image8,
    },
    
    {
      id: 9,
      category: "Design",
      title: "UI/UX Design Basics",
      modules: 10,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image13,
    },
    {
      id: 10,
      category: "Design",
      title: "Graphics Design (Beginner Level)",
      modules: 30,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image14,
    },
    {
      id: 11,
      category: "Design",
      title: "User Research",
      modules: 8,
      xpPoints: "100",
      duration: "6 Weeks",
      image: Image15,
    },
    {
      id: 12,
      category: "Design",
      title: "User Testing",
      modules: 15,
      xpPoints: "500",
      duration: "4 Weeks",
      image: Image16,
    },
    {
      id: 13,
      category: "Design",
      title: "Intro to Prototyping",
      modules: 15,
      xpPoints: "1000",
      duration: "4 Weeks",
      image: Image17,
    },
    {
      id: 14,
      category: "Design",
      title: "Principles of Design",
      modules: 5,
      xpPoints: "100",
      duration: "10 Weeks",
      image: Image18,
    },
    {
      id: 15,
      category: "Design",
      title: "Creative Design",
      modules: 15,
      xpPoints: "100",
      duration: "20 Weeks",
      image: Image19,
    },
    {
      id: 16,
      category: "Design",
      title: "Wire framing",
      modules: 20,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image20,
    },
    {
      id: 17,
      category: "Web Development",
      title: "Frontend Basics",
      modules: 20,
      xpPoints: "500",
      duration: "10 Weeks",
      image:  Image9,
    },
    {
      id: 18,
      category: "Web Development",
      title: "Intro to ReactJs",
      modules: 20,
      xpPoints: "1000",
      duration: "10 Weeks",
      image:  Image10,
    },
    {
      id: 19,
      category: "Web Development",
      title: "API Integration",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image11,
    },
    {
      id: 20,
      category: "Web Development",
      title: "Fullstack Engineer (Basics)",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image:  Image12,
    },
    {
      id: 21,
      category: "Chat GPT & Machine Learning",
      title: "Machine Learning",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image21,
    },
    {
      id: 22,
      category: "Chat GPT & Machine Learning",
      title: "Introduction to Generative AI",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image22,
    },
    {
      id: 23,
      category: "Chat GPT & Machine Learning",
      title: "ChatGPT Complete Guide",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image23,
    },
    {
      id: 24,
      category: "Chat GPT & Machine Learning",
      title: "Artificial Intelligence",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image24,
    },
    {
      id: 25,
      category: "Chat GPT & Machine Learning",
      title: "Basics of Ai Ethics",
      modules: 15,
      xpPoints: "100",
      duration: "10 Weeks",
      image: Image25,
    },
    {
      id: 26,
      category: "Chat GPT & Machine Learning",
      title: "Prompt Engineering",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image26,
    },
    {
      id: 27,
      category: "Chat GPT & Machine Learning",
      title: "Intro to Chatbot",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image27,
    },
    {
      id: 28,
      category: "Copywriting & Content Writing",
      title: "SEO",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image27,
    },
    {
      id: 29,
      category: "Copywriting & Content Writing",
      title: "Copywriting Basics",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image28,
    },
    {
      id: 30,
      category: "Copywriting & Content Writing",
      title: "Technical Writing",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image29,
    },
    {
      id: 31,
      category: "Copywriting & Content Writing",
      title: "Content Marketing",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image30,
    },
    {
      id: 32,
      category: "Copywriting & Content Writing",
      title: "Email Writing",
      modules: 15,
      xpPoints: "1000",
      duration: "10 Weeks",
      image: Image31,
    },
    {
      id: 33,
      category: "Copywriting & Content Writing",
      title: "Social Media Writing",
      modules: 15,
      xpPoints: "500",
      duration: "10 Weeks",
      image: Image32,
    },
    {
      id: 34,
      category: "Copywriting & Content Writing",
      title: "Basics of Digital Marketing",
      modules: 15,
      xpPoints: "100",
      duration: "10 Weeks",
      image: Image33,
    },
    {
      id: 35,
      category: "Copywriting & Content Writing",
      title: "Lead Generation",
      modules: 15,
      xpPoints: "200",
      duration: "10 Weeks",
      image: Image34,
    },

  ];

  // Filter courses dynamically based on the active category
  const filteredCourses = courses.filter(
    (course) => course.category === activeCategory
  );

  return (
    <div className="courses-page">
      <Header />
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className={`courses-content ${sidebarOpen ? "shifted" : ""}`}>
        <h1>All Categories of Courses</h1>
        <p>
          Enroll for a course today and start earning while you learn! Start
          Now! All you need to do is{" "}
          <span className="highlight">Enroll Now</span> for a course,{" "}
          <span className="highlight">Connect Wallet</span>, finish a course,
          and earn XP points.
        </p>
        <div className="categories-tabs">
           {categories.map((category, index) => (
             <button
               key={index}
               className={`category-tab ${
               activeCategory === category ? "active" : ""
             }`}
         onClick={() => setActiveCategory(category)}
        >
           {category}
          </button>
        ))}
      </div>


        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              modules={course.modules}
              xpPoints={course.xpPoints}
              duration={course.duration}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
