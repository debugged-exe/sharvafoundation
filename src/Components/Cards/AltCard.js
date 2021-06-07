import React from 'react';
import './altCard.css';
import one from './one.jpeg';

function AltCard(){
    return(
        <div className="newcard">
            <div className="cardTop">
                <img src={one} className="cardImg"/>

            </div>
            <div className="cardBottom">
                <div className="Detail">
                <h4> Event Heading which here is used as a sample template Heading </h4>
              <p><b>₹42,000</b> raised out of  ₹60,000</p>
            <div class="skill-bar">
                    <div class="skill-per" per="90"></div>
                </div>
                </div>
                <div className="lastLine">
                  <span style={{ padding: "0px 10px 3px 10px", width:"20%"}}>
                      <img src={"https://www.pinclipart.com/picdir/big/538-5384597_support-icon-png-clipart.png"} alt=""/>
                  </span>
                    <p><b>100</b> Supporters</p>
                    <b>Learn More</b>
                </div>
            </div>
        </div>

    )
}

export default AltCard;
