import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';
import {FiInstagram} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {SiYoutube} from "react-icons/si";

import {AiOutlineLinkedin} from "react-icons/ai";

import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";


function Footer({setInitiative}){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer">
            <div className="footer-left">
                    <img src={"https://www.sharvafoundation.org/static/images/logo.png"} alt=""/>

                <p> Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


            </div>
            <ul className="footer-right">
           <li className="EventsBranches">
                     <h2 className={'h2'}>EVENTS</h2>
                     <ul className="box">
                       <Link to="/events"  onClick={() => setInitiative("hungerfreeindia")}>
                          <li>#HungerFreeIndia</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("strivewithpride")}>
                          <li>#StriveWithPride</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("projectruya")}>
                          <li>#ProjectRuya</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("asfreeasabird")}>
                          <li>#AsFreeasaBird</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("giveherwings")}>
                          <li>#GiveHerWings</li></Link>
                     </ul>
                 </li>
             </ul>
             <ul className="footer-right">
            <li className="EventsBranches">
                      <h2 className={'h2'}>BRANCHES</h2>
                      <ul className="box">
                          <li><a href="">Pune</a> </li>
                        <li><a href="">Jammu</a> </li>
                      <li><a href="">Delhi</a> </li>
                      </ul>
            </li>
            </ul>

            </footer>

            <footer className="flexwrapmedia flex justify-between items-center f5 flex-wrap " style={{backgroundColor: "black"}}>

              <div className="ma2"><p className="pa0 ma0 tc">© Copyrights 2020 | sharvafoundation.org</p>
              </div>

              <div className="ma2">
                <p>developed by <a className="white" href="https://debuggedexe.com/#/"><b>debugged.exe</b></a></p>
             </div>

            <div className="ma2">
                <ul className="listStylingNone flex pointer  ">
                  <li className="mh2"><a style={{outline:'none'}} href='https://wa.me/917517502268' className='  white dimIcon '><FaWhatsapp size="1.8rem" /></a></li>
                  <li className="mh2"><a style={{outline:'none'}} href='https://instagram.com/sharvafoundation?igshid=yubeg3h96wn4' className=' white dimIcon '><FiInstagram size="1.8rem"/></a></li>
                  <li className="mh2">  <a style={{outline:'none'}} href='https://twitter.com/Sharvacharity' className='  white  dimIcon'><AiOutlineTwitter size="1.8rem" /></a></li>
                  <li className="mh2"><a style={{outline:'none'}} href='https://www.linkedin.com/company/sharva-foundation' className='  white dimIcon '><AiOutlineLinkedin size="1.8rem"/></a></li>
                  <li className="mh2"><a style={{outline:'none'}} href='mailto:foundationsharva@gmail.com?subject=Joining a good cause' className='  white dimIcon'><SiGmail size="1.8rem" /></a></li>
                <li className="mh2"><a style={{outline:'none'}} href='https://www.youtube.com/channel/UCZT6olVE-2v_LWqXmrbqPug' className='  white dimIcon'><SiYoutube size="1.8rem" /></a></li>
                </ul>

            </div>


            </footer>
            </div>





  );
}

export default Footer;
