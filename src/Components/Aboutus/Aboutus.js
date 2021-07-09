import React from 'react';
import './Aboutus.css';
import { HashLink as Link } from 'react-router-hash-link';

function Aboutus(){
    return(
        <div className="aboutUs mb3" id="aboutus">
            <div className="mw7 mw7-ns center ">
                <h2 className="center" style={{paddingBottom:'1em',textDecoration:'underline',textAlign:"center",textDecorationColor:'#e88f0a'}}>ABOUT SHARVA</h2>
                <p className="lh-copy text" style={{textAlign:"center"}} >
                Sharva Foundation is a group of young and determined individuals who share the same mindset, that is the maximum reconciliation of the fragments of the society which are over looked and undocumented for. Brought to life during the coronavirus pandemic, we quickly learned the hardships faced by the people firsthand. In times of despair, we took it upon us to create a society that helps and works to grow together.
                </p>
            </div>
            <div className="cf abouttext ">
                <div className="fl imgText">
                   <img alt="" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="abs"></img>
                </div>
                <div className="fl  imgText text">
                    <p className="lh-copy " style={{textAlign:"left"}}>
                    With each growing day we add more people to our family that share our ideals. We have witnessed growth exponentially and that made it clear that there are people out there who want to provide their aid. And we act like a platform. We hope to see tomorrow build out on a foundation laid by love, trust and care. That is what drives our purpose.In times such as these, it is of upmost importance that we need to work together. Any undocumented call of aid can turn out to be the decision that governs someone’s survival. By reaching us is how you prevent this.
                    </p>
                    <p className="lh-copy mt3" style={{textAlign:"left"}}>
                  We started as taking baby steps towards our goal. Carving new roads and finding new acquaintances as we went down the road. Today, not even a year later from the beginning, we have already dispersed out aid via members of our family to 3 states and 5 cities. Knowing this fuels us with determination that whatever we thought we were capable of, we are that and maybe even more.
                    </p>
                    <Link className="inputBox aboutButton mt3" to="/donatenow/#donateImage">
                      <input type="submit" name="" value="Donate Now"></input>
                    </Link>
                  </div>
            </div>
        </div>
    );
}

export default Aboutus;
