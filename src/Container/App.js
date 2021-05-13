import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js";
import Aboutus from "../Components/Aboutus/Aboutus.js";
import Listcard from "../Components/Cards/Listcard.js";
import Counter from "../Components/Counter/Counter.js";
import Contact from "../Components/Contact/Contact.js";
import Footer from "../Components/Footer/Footer.js";
import tachyons from 'tachyons';
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import './App.css';


function App() {
  return (
    <div>
       <Navbar />
      <BackgroundCarousel />
      <Counter />
      <Aboutus />
       <Listcard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
