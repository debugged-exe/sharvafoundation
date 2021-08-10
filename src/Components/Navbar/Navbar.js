import React, { useState } from 'react';
import './Navbar.css';
import { useLocation } from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import imgUrl from './sharva.png';


const Navbar = ({ setInitiative }) => {
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

  const location=useLocation();
  console.log(location);

  const[covid,setCovid]=useState(false);



  return (

    <nav className={`flex justify-between items-center shadow-5 ${navbarContents}`}>
      <div className="mr2">
        <Link to="/"><img src={imgUrl} alt="Logo" style={{ height: "60px", width: "60px" }}></img></Link>
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

          <Link to="/" ><li className="list-style-none mh2 black menu"><span className={` ${location.pathname==='/'?'acName':''}`}  onClick={() => hamburger()}>Home</span></li></Link>

        <Link to="/events" className="linkInitiatives">
            <li className="list-style-none mh2 black menu"><span className={` ${(location.pathname==='/events')&&(covid===false)?'acName':''}`}>Our Initiatives</span>
              <ul className="sub-menu black align-center">
                <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("foodforcause");setCovid(false);hamburger()}} > Food for Cause</li></Link>
                <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("strivewithpride");setCovid(false);hamburger()}} > Strive With Pride</li></Link>
              { /*  <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("projectruya");setCovid(false);setCovid(false);hamburger()}}> Project Ruya</li></Link>
                <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("asfreeasabird");setCovid(false);hamburger()}} > As Free As a Bird</li></Link>*/}
                <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("giveherwingstofly");setCovid(false);hamburger()}} > Give Her Wings to Fly</li></Link>
              <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("projectgreen");setCovid(false);hamburger()}} >Project Green</li></Link>
              <Link to="/events" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("blooddonation");setCovid(false);hamburger()}} >Blood Donation</li></Link>
              </ul>
            </li></Link>
          <Link to="/events">
            <li className="list-style-none mh2 black menu" onClick={() => {setInitiative("covid19");setCovid(true)}}><span className={` ${location.pathname==="/events" && (covid===true)?'acName':''}`}  onClick={() => hamburger()}>Covid 19</span></li></Link>
        {/*  <Link to="/awareness">
          <li className="list-style-none mh2 black menu"><span className={` ${location.pathname==='/awareness'?'acName':''}`}  onClick={() => hamburger()}>Awareness</span></li></Link>*/}
        <Link to="/#aboutus" >
            <li className="list-style-none mh2 black menu"><span className={` ${location.pathname==='/#aboutus'?'acName':''}`}  onClick={() => hamburger()}>About Us</span></li></Link>
          <Link to="/joinus">
            <li className="list-style-none mh2 black menu"><span className={` ${location.pathname==='/joinus'?'acName':''}`}  onClick={() => hamburger()}>Join Us</span></li></Link>
          <Link to="/contactus">
            <li className="list-style-none mh2 black menu"><span className={` ${location.pathname==='/contactus'?'acName':''}`}  onClick={() => hamburger()}>Contact Us</span></li></Link>
          <Link to="/donatenow" className="pv2  nav-donate">
            <a class="f5 link dim br2 ph3 pv2 white "  style={{ backgroundColor: "#e88f0a" }}  onClick={() => hamburger()}>Donate Now</a>
          </Link>
          <p className='tc'><Link className={`f6 link dim ph3 pv1 mb2 mt2 dib white crossNavbar flex justify-center items-center`} href='#0'
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
