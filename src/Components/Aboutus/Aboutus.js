import React from 'react';
import './Aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs mb3">
            <div className="mw5 mw7-ns center  pa3 ">
                <h2 className="center" style={{paddingBottom:'1em',textDecoration:'underline',textAlign:"center",textDecorationColor:'#ff8c00'}}>ABOUT SHARVA</h2>
                <p className="lh-copy " style={{textAlign:"center"}} >
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                 The passage is attributed to an unknown typesetter in the 15th century<br />
                  who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                </p>
            </div>
            <div className="cf abouttext ">
                <div className="fl imgText">
                   <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="abs"></img>
                </div>
                <div className="fl  imgText text">
                    <p className="lh-copy " style={{textAlign:"left"}}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century<br />
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                    </p>
                    <p className="lh-copy mt3" style={{textAlign:"left"}}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century<br />
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                    </p>
                    <div className="inputBox aboutButton mt3 ">
                      <input type="submit" name="" value="Donate Now"></input>
                    </div>
                  </div>
            </div>
        </div>

    );
}

export default Aboutus;
