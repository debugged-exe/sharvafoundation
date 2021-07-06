import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import branches from "./map.png";
import sharvalogo from './sharva.png';
import {FiInstagram} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {SiYoutube} from "react-icons/si";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";


function Footer({setInitiative}){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer">
            <div className="footer-left ">
                    <img src={sharvalogo} alt="" style={{height:"75px",width:"75px"}}/>

                  <p> We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love.</p>


            </div>
            <ul className="footer-right">
           <li className="EventsBranches">
                     <h2 className={'h2 responsive-heading'}>EVENTS</h2>
                   <ul className="box flex justify-center items-center">
                       <Link to="/events"  onClick={() => setInitiative("hungerfreeindia")}>
                          <li className="eventsHover ">#HungerFreeIndia</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("strivewithpride")}>
                          <li className="eventsHover ">#StriveWithPride</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("projectruya")}>
                          <li className="eventsHover ">#ProjectRuya</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("asfreeasabird")}>
                          <li className="eventsHover ">#AsFreeasaBird</li></Link>
                        <Link to="/events"  onClick={() => setInitiative("giveherwings")}>
                          <li className="eventsHover ">#GiveHerWings</li></Link>
                     </ul>
                 </li>
             </ul>
             <ul className="footer-right"  style={{padding:"0",margin:"0"}}>
            <li className="EventsBranches" style={{padding:"0",margin:"0"}}>
                      
                      <img src={branches} style={{maxHeight:"215px",width:"240px"}}/>
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
                  <li className="mh2"><a style={{outline:'none'}} href='https://wa.me/917517502268' className='  white dimIcon '><FaWhatsapp size="1.3rem" /></a></li>
                <li className="mh2"><a style={{outline:'none'}} href='https://instagram.com/sharvafoundation?igshid=yubeg3h96wn4' className=' white dimIcon '><FiInstagram size="1.3rem"/></a></li>
              <li className="mh2">  <a style={{outline:'none'}} href='https://twitter.com/Sharvacharity' className='  white  dimIcon'><AiOutlineTwitter size="1.3rem" /></a></li>
            <li className="mh2"><a style={{outline:'none'}} href='https://www.linkedin.com/company/sharva-foundation' className='  white dimIcon '><FaLinkedinIn size="1.3rem"/></a></li>
          <li className="mh2"><a style={{outline:'none'}} href='mailto:foundationsharva@gmail.com?subject=Joining a good cause' className='  white dimIcon'><SiGmail size="1.3rem" /></a></li>
        <li className="mh2"><a style={{outline:'none'}} href='https://www.youtube.com/channel/UCZT6olVE-2v_LWqXmrbqPug' className='  white dimIcon'><SiYoutube size="1.3rem" /></a></li>
                </ul>

            </div>


            </footer>
            </div>





  );
}

export default Footer;
