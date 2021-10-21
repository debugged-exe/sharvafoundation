import React from 'react';
import './Aboutus.css';

import aboutimage from "./aboutimage.jpeg";

function Aboutus(){
    return(
        <div className="aboutUs mb3" id="aboutus">
          <div className="flex justify-center items-center  mv4">
           <div className=" coupon-div shadow-5 br3 pb3">
               <div className="pa3 coupon-left">
                   <h2 className=" f2 tc " style={{color:'#fff'}}>Support Sharva</h2>
                   <p className="tl pt4 white" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>

We at Sharva Foundation are in collaboration with Boat Premium. You can buy any clothing from them and use the coupon code provided accordingly to avail discount and apart your purchase amount will be utilized by us in the betterment of the society. Happy Shopping.<br/> <br/>
<div className="shopNowButton">
<a href="https://www.boatpremium.com/" className="fw6 bg-white black pa2 ph3 f5 grow pointer link">Shop Now</a></div>
                   </p>


               </div>
               <div className="coupon-button  ">
               <h3 className="white mt3"> Men's Clothing </h3>
             <button className=" fw6 bg-white black pa2 mt1  ph3 f4 grow pointer" style={{ border: 'none'}}>
                    Supportsharva200
</button>
<h3 className="white  mt3"> Women's Clothing </h3>
<button className=" fw6 bg-white black pa2 ph3 f4 mt1 grow pointer" style={{ border: 'none'}}>
     Supportsharva100</button>

               </div>


           </div>
       </div>
            <div className="mw7 mw7-ns center ">

            </div>
            <div className="cf abouttext  ">
                <div className="fl imgText imgCenter pl4">
                   <img alt=""style={{height:"375px",width:"650px"}} src={aboutimage} className= "mv4 "></img>
                </div>
                <div className="fl imgText text">
                    <h2 className="center" style={{paddingBottom:'1em',textDecoration:'underline',textAlign:"center",textDecorationColor:'#e88f0a'}}>ABOUT SHARVA</h2>
                    <p className="lh-copy mb2" style={{textAlign:"justify"}}>
                      Sharva Foundation is a group of determined individuals who share the same mindset, that is the maximum reconciliation of the fragments of the society which are over looked and undocumented for. Brought to life during the coronavirus pandemic, we quickly learned the hardships faced by the people. In times of despair, we took it upon us to create a society that helps and works to grow together.
                    </p>
                    <p className="lh-copy " style={{textAlign:"justify"}}>
                  We have witnessed growth exponentially and that made it clear that there are people out there who want to provide their aid and we act like a platform. We hope to see tomorrow build out on a foundation laid by love, trust and care. That is what drives our purpose. In times such as these, it is of upmost importance that we need to work together. Any undocumented call of aid can turn out to be the decision that governs someone’s survival. By reaching us is how you prevent this.
                    </p>

                    {/* <a href="https://rzp.io/l/QEare0TAIU" className="inputBox aboutButton">
                      <input type="submit" name="" value="Donate " style={{marginTop:"30px"}}></input>
                    </a> */}
                  </div>
            </div>
        </div>
    );
}

export default Aboutus;
