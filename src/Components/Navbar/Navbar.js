import React,{useState} from 'react';
import './Navbar.css';
import imgUrl from './sharva.png';

function Navbar () {

  const [navbarContents,setNavbarContents]=useState(true);

    return(
      <nav className="flex justify-even items-center ">
        <div className="mr2">
          <img src={imgUrl} alt="Logo" style={{height:"60px",width:"60px"}}></img>
        </div>
        <div className= {`hide-contents ${navbarContents?'show':'hide'}`}  >
          <ul className="list-style-none flex justify-center mr2 items-center ">
            <li className="mh2 f5 "><a href="" >Home</a></li>
            <li className="mh2 f5"><a href="">Our Initiatives</a></li>
            <li className="mh f5"><a href="">Covid 19</a></li>
            <li className="mh2 f5"><a href="">About Us</a></li>
            <li className="mh2 f5"><a href="">Contact Us</a></li>
            {/* <li><a href=""></a>Button</li> */}
          </ul>
        </div>
        <div className= {` ml2 hide-contents ${navbarContents?'show':'hide'}`} >
        <a class="f6 link dim br2 ph3 pv2 white bg-black" href="#0">Donate Now</a>
        </div>
        <div className="burger " onClick={()=>setNavbarContents(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
      </nav>
    );
}

export default Navbar;
