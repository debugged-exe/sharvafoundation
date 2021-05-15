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
                <span style={{ padding: "10px 10px 3px 10px", borderRadius: "50%"}}>
                    <img src={"https://www.sharvafoundation.org/static/images/logo.png"} alt=""/>
                </span>
                <p className={'p1'}>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


            </div>
            <ul className="footer-right">
           <li>
                     <h2 className={'h2'}>EVENTS</h2>
                     <ul className="box">
                         <li><a href="">Event 1</a></li>
                       <li><a href="">Event 2</a></li>
                       <li><a href="">Event 3</a></li>
                       <li><a href="">Event 4</a></li>
                     </ul>
                 </li>
             </ul>
             <ul className="footer-right">
            <li>
                      <h2 className={'h2'}>BRANCHES</h2>
                      <ul className="box">
                          <li><a href="">Pune</a> </li>
                        <li><a href="">Jammu</a> </li>
                      <li><a href="">Delhi</a> </li>
                      </ul>
            </li>
            </ul>
            </footer>

            <footer className="pv3 ph3 ph5-m footerContents ph6-l f6 db" style={{backgroundColor: "black"}}>

            <div className="flex f4 socials">
                <a style={{outline:'none'}} href='https://www.facebook.com/Sharva-Foundation-571908020152850/?modal=admin_todo_tour' className='pa2 link socialIcon white dim fb'><FiFacebook  /></a>
                <a style={{outline:'none'}} href='https://instagram.com/sharvafoundation?igshid=yubeg3h96wn4' className='pa2 link white dim ig'><FiInstagram/></a>
                <a style={{outline:'none'}} href='https://wa.me/917517502268' className='pa2 link white dim wa'><FaWhatsapp /></a>
                <a style={{outline:'none'}} href='https://twitter.com/Sharvacharity' className='pa2 link white dim fb'><AiOutlineTwitter /></a>
                <a style={{outline:'none'}} href="mailto:foundationsharva@gmail.com?subject=Joining a good cause" className='pa2 link white dim gm'><SiGmail /></a>
            </div>
                <small className="f6 db f1 ttu">
                developed by <b><a  href="https://debuggedexe.com/#/">debugged.exe</a></b></small>

            </footer>
            </div>





  );
}

export default Footer;
