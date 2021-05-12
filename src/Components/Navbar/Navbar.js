import React from 'react';
import './Navbar.css';
import imgUrl from './sharva.png';

function Navbar () {
    return(
        <nav class="dt w-100 border-box pa3 ">
  <a class="dtc v-mid mid-gray link dim w-10" href="#" title="Home">
    <img src={imgUrl} class="dib w2 h2 br-100" alt="Site Name" />
  </a>
  <div class="dtc v-mid w-90 tr">
    <a class="link dim dark-gray hoverStyle f6 f5-ns dib mr3 mr4-ns" href="#" title="home">Home</a>
    <a class="link dim dark-gray f6 f5-ns dib  mr4-ns" href="#" title="Events">Events</a>
    <a class="link dim dark-gray f6 f5-ns dib  mr4-ns" href="#" title="Events">Covid-19</a>
    <a class="link dim dark-gray f6 f5-ns dib  mr4-ns" href="#" title="Events">About Us</a>
    <a class="link dim dark-gray f6 f5-ns dib  mr4-ns" href="#" title="Events">Contact Us</a>
    <button>Donate Now</button>
  </div>
</nav>
        
    );
}

export default Navbar;