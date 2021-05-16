import React from 'react';
import './Navbar.css';
import imgUrl from './sharva.png';

function Navbar () {
    return(
      
        <nav className="dt w-100 border-box pa3 ">
  <a className="dtc v-mid mid-gray link navbarIcon  " href="#" title="Home">
    <img src={imgUrl} class="dib br-100 iconStyling" alt="Site Name" />
  </a>
  
  <div className="dtc navbarContents v-mid ">
    <a className="link dim dark-gray hoverStyle f5 f5-ns dib mr3 mr4-ns" href="#" title="home">Home</a>
    <a className="link dim dark-gray f5 f5-ns dib  mr4-ns" href="#" title="Our Initiatives">Our Initiatives</a>
    <a className="link dim dark-gray f5 f5-ns dib  mr4-ns" href="#" title="Covid 19">Covid-19</a>
    <a className="link dim dark-gray f5 f5-ns dib  mr4-ns" href="#" title="About Us">About Us</a>
    <a className="link dim dark-gray f5 f5-ns dib  mr4-ns" href="#" title="Events">Contact Us</a>  
    <a className="f5  link  br2  ph3 pv2 mb2 dib navButton" href="#0">Donate Now</a>
    </div>
</nav>
    );
}

export default Navbar;
