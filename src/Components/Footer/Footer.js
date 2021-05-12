import React from 'react';
import './Footer.css';
import {FiInstagram} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";


function Footer(){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer">
            <div className="footer-left">
                <span style={{ padding: "30px 10px 3px 10px", borderRadius: "50%"}}>
                    <img src={"https://www.sharvafoundation.org/static/images/logo.png"} alt=""/>
                </span>
                <p className={'p1'}>"Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>


            </div>
            <ul className="footer-right">
           <li>
                     <h2 className={'h2'}>EVENTS</h2>
                     <ul className="box">
                         <li>Event 1</li>
                         <li>Event 2</li>
                         <li>Event 3</li>
                         <li>Event 4</li>
                     </ul>
                 </li>
             </ul>
             <ul className="footer-right">
            <li>
                      <h2 className={'h2'}>BRANCHES</h2>
                      <ul className="box">
                          <li>Pune </li>
                          <li>Jammu</li>
                          <li>Delhi</li>
                      </ul>
            </li>
            </ul>
            </footer>

            <footer className="pv4 ph3 ph5-m ph6-l f6 db " style={{backgroundColor: 'black'}}>
            <div className="socials dim">
            <a href={"#"}><FiInstagram  color="white"/></a>
            <a href={"#"}><FiFacebook  color="white"/></a>
            <a href="#"><SiGmail color="white"/></a>
            <a href="#"><AiOutlineTwitter  color="white"/></a>
            <a href="#"><FaWhatsapp  color="white"/></a>
            <a href="#"><AiFillLinkedin color="white"/></a>
            </div>
                <small className="f6 db f1">
                © 2021  Developed by
                    <b>Debugged.exe</b> All Rights Reserved</small>

            </footer>
            </div>





  );
}

export default Footer;
