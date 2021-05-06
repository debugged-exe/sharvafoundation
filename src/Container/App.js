import React from 'react';
import 'tachyons';
import Navbar from "../Components/Navbar/Navbar.js";
import Aboutus from "../Components/Aboutus/Aboutus.js";
import Cards from "../Components/Cards/Cards.js";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Cards />
    </div>
  );
}

export default App;
