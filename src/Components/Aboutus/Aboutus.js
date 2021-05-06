import React from 'react';
import './Aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs">
            <div className="mw5 mw7-ns center abc pa3 ph5-ns">
                <h2 className="center ">About Sharva</h2>
                <p className="lh-copy ">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                 The passage is attributed to an unknown typesetter in the 15th century<br />
                  who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                </p>
            </div>
            <div className="cf ">
                <div className="fl w-50  ">
                   <img src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg" className="abs"></img>
                </div>
                <div className="fl w-50 tex ">
                    <p className="lh-copy  ">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century<br />
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                    </p> 
                    <p className="lh-copy  ">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century<br />
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                    </p>
                    <btn className=" link f6 f5-l dib mr3 mr4-l donatebutton">Donate now</btn>
                </div>
            </div>
        </div>

    );
}

export default Aboutus;