import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js";
import Aboutus from "../Components/Aboutus/Aboutus.js";
import Listcard from "../Components/Cards/Listcard.js";
import Counter from "../Components/Counter/Counter.js";
import BackgroundCarousel from "../Components/BackgroundCarousel/BackgroundCarousel";
import './App.css';


function App() {
  return (
    <div>
       <Navbar /> 
      <BackgroundCarousel />
      <Aboutus />
       <Listcard /> 
      <Counter />
    </div>
  );
}

export default App;
