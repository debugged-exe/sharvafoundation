import React from 'react';
import './altCard.css';
import one from './one.jpeg';

function Altcard(){
    return(
        <div className="newcard">
            <div className="cardTop">
                <img src={one} className="cardImg"/>
            </div>
            <div className="cardBottom flex-column justify-center items-center">
                <div className="Detail">
                <h4> Event Heading which here is used as a sample template Heading </h4>
              <p><b>₹42,000</b> raised out of  ₹60,000</p>
            <div class="skill-bar">
                    <div class="skill-per" per="90"></div>
                </div>
                <div className="flex justify-center items-center">
                <a className="f5  link br2 ph3 pv2 mb2 mt2  dib cardButton" href="#0">Donate Now</a>
                </div>
                
                </div>
                <div className="lastLine ">
                   
                    <p><b>100 Supporters</b></p>
                    <a href="sharvafoundation.org" className="">
                        <b>Learn More</b>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Altcard;
