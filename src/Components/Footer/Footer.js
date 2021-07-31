import React from 'react';
import './Footer.css';
import branches from "./ankita_pic.jpeg";
import sharvalogo from './sharva.png';
import {FiInstagram} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {SiYoutube} from "react-icons/si";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedinIn,FaQuoteRight,FaQuoteLeft} from "react-icons/fa";

function Footer({setInitiative}){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer">
          <ul className="footer-right "  style={{padding:"0",margin:"auto"}}>
         <li className="EventsBranches ankita-pic" style={{padding:"0",margin:"0"}}>

                   <img src={branches} alt="" style={{height:"200px",width:"200px",objectFit:"cover",borderRadius:'50%'}}/>
                   <h2>Ankita Zadoo</h2>
                   <h5>Founder</h5>
         </li>
         </ul>

            <div className="footer-left ">
                  <img src={sharvalogo} alt="" style={{height:"75px",width:"75px"}}/>
                  <br/><FaQuoteLeft className="mv1"/>
                  <p className="lh-copy tj"> We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love.</p>
                  <FaQuoteRight className="mv1"/>


            </div>



            </footer>
            </div>





  );
}

export default Footer;
