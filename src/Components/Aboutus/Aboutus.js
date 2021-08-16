import React from 'react';
import './Aboutus.css';
import { HashLink as Link } from 'react-router-hash-link';
import aboutimage from "./aboutimage.jpeg";

function Aboutus(){
    return(
        <div className="aboutUs mb3" id="aboutus">
            <div className="mw7 mw7-ns center ">

            </div>
            <div className="cf abouttext  ">
                <div className="fl imgText imgCenter pl3">
                   <img alt=""style={{height:"375px",width:"650px"}} src={aboutimage} className= "mv4"></img>
                </div>
                <div className="fl imgText text">
                    <h2 className="center" style={{paddingBottom:'1em',textDecoration:'underline',textAlign:"center",textDecorationColor:'#e88f0a'}}>ABOUT SHARVA</h2>
                    <p className="lh-copy mb2" style={{textAlign:"justify"}}>
                      Sharva Foundation is a group of determined individuals who share the same mindset, that is the maximum reconciliation of the fragments of the society which are over looked and undocumented for. Brought to life during the coronavirus pandemic, we quickly learned the hardships faced by the people. In times of despair, we took it upon us to create a society that helps and works to grow together.
                    </p>
                    <p className="lh-copy " style={{textAlign:"justify"}}>
                  We have witnessed growth exponentially and that made it clear that there are people out there who want to provide their aid and we act like a platform. We hope to see tomorrow build out on a foundation laid by love, trust and care. That is what drives our purpose. In times such as these, it is of upmost importance that we need to work together. Any undocumented call of aid can turn out to be the decision that governs someone’s survival. By reaching us is how you prevent this.
                    </p>

                    <a href="https://rzp.io/l/02C64fT" className="inputBox aboutButton">
                      <input type="submit" name="" value="Donate " style={{marginTop:"30px"}}></input>
                    </a>
                  </div>
            </div>
        </div>
    );
}

export default Aboutus;
