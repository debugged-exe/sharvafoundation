import React from 'react';
import './Aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs">
            <div className="mw5 mw7-ns center abc pa3 ">
                <h2 className="center ">ABOUT SHARVA</h2>
                <p className="lh-copy ">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                 The passage is attributed to an unknown typesetter in the 15th century<br />
                  who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                </p>
            </div>
            <div className="cf ">
                <div className="fl w-50  ">
                   <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="abs"></img>
                </div>
                <div className="fl w-50 text ">
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
                    <div className="inputBox">
                      <input type="submit" name="" value="Donate Now"></input>
                    </div>
                  </div>
            </div>
        </div>

    );
}

export default Aboutus;
