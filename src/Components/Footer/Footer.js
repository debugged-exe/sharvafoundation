import React from 'react';
import './Footer.css';
import {HashLink as Link} from 'react-router-hash-link';
import {MdEmail} from "react-icons/md";
import {ImLocation2} from "react-icons/im";

function Footer({setInitiative}){
  return(
    <div className="body" style={{display: 'inline-block', width: "100%"}}>
        <footer className="footer ">

            <div className="footer-left mh2 ">

                  {/* <br/><FaQuoteLeft className="mv0"/> */}
                  <h2 style={{}}>Our Vision</h2><br/>
                  <p className="lh-copy tj"> We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love.</p>
                  {/* <FaQuoteRight className="mv0"/> */}
            </div>

            <ul className="footer-right  ">
              <li className="mv3">
                   <h2 className={'h2'}>Quick Links</h2>
                 <ul className=" pointer mt4 ">
                   <Link to="/#ourgoals"><li className="mv2 white quickLinks">Ongoing Projects</li></Link>
                       <a href="https://rzp.io/l/02C64fT"><li className="mv2 white quickLinks">Donate</li></a>
                       <Link to="/joinus"><li className="mv2 white quickLinks">Become a Volunteer</li></Link>
                       <Link to="/termsandcondition/#terms"><li className="mv2 white quickLinks">Terms And Condition</li></Link>
                     <Link to="/privacy/#privacy"><li className="mv2 white quickLinks">Privacy</li></Link>

                   </ul>
              </li>
           </ul>

           <ul className="footer-right">
              <li className="mv3 ">
                       <h2 className={'h2'}>Contact Us</h2>
                       <p className="mv2"><ImLocation2 className="mh2" size="1.2em" />Sharva Foundation <br/>
                       Hno.163 Ambika Vihar near PHC Gole Gujral, Talab Tillo, Jammu, Jammu and Kashmir 180002</p>
            <span className="flex items-center justify-center mv3"><MdEmail className="mh0-s mh0-m mh2 " size="2em" /> Email: team.sharvafoundation@gmail.com</span>


              </li>
          </ul>




            </footer>
            </div>





  );
}

export default Footer;
