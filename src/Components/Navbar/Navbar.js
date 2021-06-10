import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import imgUrl from './sharva.png';
import Aboutus from '../Aboutus/Aboutus';

const Navbar = () => {

  const [navbarContents, setNavbarContents] = useState('navbarContents');
  const [dropDown, setDropDown] = useState('hidden');
  const [line, setLine] = useState('show');
  const hamburger = () => {
    if (dropDown === 'hidden') {
      setDropDown('visible')
      setNavbarContents('navbarContents-resp')
      setLine('hide')
    }
    else {
      setDropDown('hidden');
      setNavbarContents('navbarContents')
      setLine('show')
    }
  }

  return (

    <nav className={`flex justify-between items-center ${navbarContents}`}>
      <div className="mr2">
        <img src={imgUrl} alt="Logo" style={{ height: "60px", width: "60px" }}></img>
      </div>

      <div className={`hamburger ${line} pr2`}
        onClick={() => hamburger()}
      >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>


      <div className={` ${dropDown}`}  >

        <ul className={` ${navbarContents} list-style-none flex justify-around pa2 mr2 items-center ${dropDown} `}>

          <Link to="/">
            <li className="list-style-none mh2 black menu">Home</li></Link>
          <Link to="/">
            <li className="list-style-none mh2 black menu">Our Initiatives
            <ul className="sub-menu black align-center">
                <li className="sub-menu-item"><a>HungerFreeIndia</a></li>
                <li className="sub-menu-item"><a>StriveWithPride</a></li>
                <li className="sub-menu-item"><a>ProjectRuya</a></li>
                <li className="sub-menu-item"><a>AsFreeAsBird</a></li>
                <li className="sub-menu-item"><a>GiveHerWingsToFly</a></li>
              </ul>
            </li></Link>
          <Link to="/">
            <li className="list-style-none mh2 black menu">Covid 19</li></Link>
          <Link to="/" >
            <li className="list-style-none mh2 black menu">About Us</li></Link>
          <Link to="/joinus">
            <li className="list-style-none mh2 black menu">Join Us</li></Link>
          <Link to="/contactus">
            <li className="list-style-none mh2 black menu">Contact Us</li></Link>
          <div className="pv2">
            <a class="f5 link dim br2 ph3 pv2 white nav-donate" href="" style={{ backgroundColor: "#e88f0a" }}>Donate Now</a></div>

          <p className='tc'><Link className={`f6 link dim ph3 pv1 mb2 dib white crossNavbar flex justify-center items-center`} href='#0'
            onClick={() => hamburger()}
          >
            X
               </Link>
          </p>


        </ul>
      </div>

    </nav >

  );
}

export default Navbar;