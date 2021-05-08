import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js";
import Aboutus from "../Components/Aboutus/Aboutus.js";
import Cards from "../Components/Cards/Cards.js";
import Counter from "../Components/Counter/Counter.js";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Cards />
      <Counter />
    </div>
  );
}

export default App;
