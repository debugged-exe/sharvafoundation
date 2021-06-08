import React,{useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import imgUrl from './sharva.png';
import Aboutus from '../Aboutus/Aboutus';

const Navbar = ()  => {

   const [navbarContents,setNavbarContents]=useState('navbarContents');
  const[dropDown,setDropDown]=useState('hidden');
  const [line, setLine]  = useState('show');
    const hamburger = () => {
        if (dropDown==='hidden'){
            setDropDown('visible')
            setNavbarContents('navbarContents-resp')
            setLine('hide')
        }
        else{
            setDropDown('hidden');
            setNavbarContents('navbarContents')
            setLine('show')
        }
    }

    return(

      <nav className={`flex justify-between items-center ${navbarContents}`}>
        <div className="mr2">
          <img src={imgUrl} alt="Logo" style={{height:"60px",width:"60px"}}></img>
        </div>

        <div className={`hamburger ${line} pr2`}
                  onClick={()=>hamburger()}
                  >
                          <div className='line'></div>
                          <div className='line'></div>
                          <div className='line'></div>
        </div>


        <div className=  {` ${dropDown}`}  >

          <ul className={` ${navbarContents} list-style-none flex justify-around pa2 mr2 items-center ${dropDown} `}>

            <Link to="/">
                <li className="mh2 black nav-item">Home</li></Link>
            <Link to="/">
                <li className="mh2 black nav-item pr2 ">Our Initiatives</li></Link>
            <Link to="/">
                <li className="mh black nav-item pl1">Covid 19</li></Link>
            <Link to="/" >
                <li className="mh2 black nav-item pr1 pl1">About Us</li></Link>
              <Link to="/joinus">
            <li className="mh2  black nav-item">Join Us</li></Link>
            <Link to="/contactus">
                <li className="mh2 black nav-item pr1">Contact Us</li></Link>
                <div className="pt2 pb3">
              <a class="f5 link dim br2 ph3 pv2 white nav-donate " href="" style={{backgroundColor:"#e88f0a"}}>Donate Now</a></div>

            <p className='tc'><Link className={`f6 link dim ph3 pv1 mb2 dib white crossNavbar flex justify-center items-center`} href='#0'
                onClick={()=>hamburger()}
                >
                X
               </Link>
              </p>


          </ul>
        </div>

      </nav>

    );
}

export default Navbar;
