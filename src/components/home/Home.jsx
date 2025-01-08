import ElearningFeatures from "./ElearningFeatures.jsx";
import Features from "./Features.jsx";
import Footer from "./Footer.jsx";
import GetStarted from "./GetStarted.jsx";
import HeroSection from "./Hero.jsx"
import LearningAdventure from "./LearningAdventure.jsx";
import LevelUp from "./LevelUp.jsx";
import WhyExplore from "./WhyExplore.jsx";
import '../../home.css'

function Home() {
    return (
      <div>
          <HeroSection/>
          <WhyExplore/>
          <Features/>
          <ElearningFeatures/>
          <LearningAdventure/>
          <LevelUp/>
          <GetStarted/>
          <Footer/>
      </div>
    );
  }
  
  export default Home;