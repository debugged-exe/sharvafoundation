import React from 'react';
import './Footer.css';
import {HashLink as Link} from 'react-router-hash-link';
import branches from "./ankita_pic.jpeg";
import sharvalogo from './sharva.png';
import {FaLinkedinIn,FaQuoteRight,FaQuoteLeft} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {ImLocation2} from "react-icons/im";

function Footer({setInitiative}){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer ">

            <div className="footer-left mh4 ">

                  <br/><FaQuoteLeft className="mv1"/>
                  <p className="lh-copy tj"> We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love.</p>
                  <FaQuoteRight className="mv1"/>
            </div>

            <ul className="footer-right  ">
              <li className="mv4 ">
                   <h2 className={'h2'}>IMPORTANT LINKS</h2>
                 <ul className=" pointer mt4">
                   <Link to="/donatenow"><li className="mv2 white">Our Recent Causes to Serve Better</li></Link>
                       <a href="https://rzp.io/l/02C64fT"><li className="mv2 white">Donate Us</li></a>
                     <Link to="/contactus"><li className="mv2 white">Contact Us</li></Link>
                       <Link to="/joinus"><li className="mv2 white">Join Us</li></Link>
                       <Link to="/termsandcondition/#terms"><li className="mv2 white">Terms And Condition</li></Link>
                     <Link to="/privacy/#privacy"><li className="mv2 white">Privacy</li></Link>

                   </ul>
              </li>
           </ul>

           <ul className="footer-right">
              <li className="mv4 ">
                       <h2 className={'h2'}>Contact Us</h2>
                       <p className="mv3"><ImLocation2 className="mh2" size="1.2em" />Sharva Foundation <br/>
              House no- 163, near PHC Gole Gujral, Ambika Vihar, Talab Tillo, Jammu, Jammu and Kashmir 180002</p>
            <span className="flex items-center justify-center mv4"><MdEmail className="mh0-s mh0-m mh2 " size="2em" /> Email: team.sharvafoundation@gmail.com</span>


              </li>
          </ul>




            </footer>
            </div>





  );
}

export default Footer;
