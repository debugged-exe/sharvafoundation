import React,{useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import imgUrl from './sharva.png';
import Aboutus from '../Aboutus/Aboutus';

function Navbar () {

  const [navbarContents,setNavbarContents]=useState(true);

    return(
      <nav className="flex justify-even items-center ">
        <div className="mr2">
          <img src={imgUrl} alt="Logo" style={{height:"60px",width:"60px"}}></img>
        </div>


        <div className= {`hide-contents ${navbarContents?'show':'hide'}`}  >

          <ul className="list-style-none flex justify-around pa2 mr2 items-center ">

            <Link to="/">
                <li className="mh2 f5 nav-item ">Home</li></Link>
            <Link to="/">
                <li className="mh2 f5 nav-item"><a href="/">Our Initiatives</a></li></Link>
            <Link to="/">
                <li className="mh f5 nav-item"><a href="/">Covid 19</a></li></Link>
            <Link to="/" >
                <li className="mh2 f5 nav-item"><a href="/">About Us</a></li></Link>
            <Link to="/">
            <li className="mh2 f5 nav-item"><a href="/">Join Us</a></li></Link>
            <Link to="/contactus">
                <li className="mh2 f5 nav-item">Contact Us</li></Link>
                
          </ul>
        </div>


        <div className= {` ml2 hide-contents ${navbarContents?'show':'hide'}`} >
        <a class="f6 link dim br2 ph3 pv2 white nav-donate" href="" style={{backgroundColor:"#e88f0a"}}>Donate Now</a>
        </div>
        <div className="hamburger " onClick={()=>setNavbarContents(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
      </nav>
    );
}

export default Navbar;
