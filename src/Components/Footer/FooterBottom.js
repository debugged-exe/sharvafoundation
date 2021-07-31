import React from 'react';
import {FiInstagram} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {SiYoutube} from "react-icons/si";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedinIn,FaQuoteRight,FaQuoteLeft} from "react-icons/fa";
function FooterBottom(){
  return(

    <footer className="flexwrapmedia flex justify-between items-center f5 flex-wrap " style={{backgroundColor: "black"}}>

      <div className="ma2"><p className="pa0 ma0 tc">© Copyrights 2020 | sharvafoundation.org</p>
      </div>



    <div className="ma2">
        <ul className="listStylingNone flex pointer">
          <li className="mh2"><a style={{outline:'none'}} href='https://wa.me/917517502268' className='  white dimIcon '><FaWhatsapp size="1.3rem" /></a></li>
          <li className="mh2"><a style={{outline:'none'}} href='https://instagram.com/sharvafoundation?igshid=yubeg3h96wn4' className=' white dimIcon '><FiInstagram size="1.3rem"/></a></li>
          <li className="mh2">  <a style={{outline:'none'}} href='https://twitter.com/Sharvacharity' className='  white  dimIcon'><AiOutlineTwitter size="1.3rem" /></a></li>
          <li className="mh2"><a style={{outline:'none'}} href='https://www.linkedin.com/company/sharva-foundation' className='  white dimIcon '><FaLinkedinIn size="1.3rem"/></a></li>
          <li className="mh2"><a style={{outline:'none'}} href='mailto:foundationsharva@gmail.com?subject=Joining a good cause' className='  white dimIcon'><SiGmail size="1.3rem" /></a></li>
          <li className="mh2"><a style={{outline:'none'}} href='https://www.youtube.com/channel/UCZT6olVE-2v_LWqXmrbqPug' className='  white dimIcon'><SiYoutube size="1.3rem" /></a></li>
        </ul>

    </div>


    </footer>
  )
}
export default FooterBottom;
