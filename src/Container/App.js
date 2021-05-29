import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js";
import Events from "../Components/Events/Events.js";
import Aboutus from "../Components/Aboutus/Aboutus.js";
import OurGoals from "../Components/OurGoals/OurGoals";
import Counter from "../Components/Counter/Counter.js";
import Contact from "../Components/Contact/Contact.js";
import Footer from "../Components/Footer/Footer.js";
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import './App.css';


function App() {
  return (
    <div>
        <Navbar />
      <BackgroundCarousel />
      <Counter />
      <Aboutus />
       <OurGoals />
      <Contact />
      <Footer /> 
      <Events />
    </div>
  );
}

export default App;
