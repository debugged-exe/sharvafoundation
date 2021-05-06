import React from 'react';
import './Navbar.css';

function Navbar () {
    return(
        <div>
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src="https://www.sharvafoundation.org/static/images/logo.png" className="dib wi hi br-100" alt="Site Name" />
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">Our Initiatives</a>
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Covid 19</a>
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="Press">Join Us</a>
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="Contact">Contact Us</a>
                    <a className="link  f6 f5-l dib mr3 mr4-l" href="#" title="Contact">About Us</a>
                    <button className="link f6 f5-l dib mr3 mr4-l donatebutton">Donate</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;