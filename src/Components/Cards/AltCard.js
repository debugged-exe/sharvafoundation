import React from 'react';
import './altCard.css';


function AltCard(){
    return(
        <div className="newcard">
            <div className="cardTop">
                <img src="https://www.sharvafoundation.org/static/images/logo.png" className="cardImg"/>
            </div>
            <div className="cardBottom">
                <div>
                <h3>Event Heading which here is used as a sample template Heading</h3>
                <p> ₹42,000 raised out of  ₹60,000</p>
                <div class="progressBar">
                    <div class="skills progressBarStyle"></div>
                </div>
                </div>
                <div className="lastLine">
                    <p><b>100</b> supporters</p>
                    <p>Learn More</p>
                </div>
            </div>
        </div>

    )
}

export default AltCard;
