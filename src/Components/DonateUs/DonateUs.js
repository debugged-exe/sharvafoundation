import React from 'react';
import "./DonateUs.css";
import pic1 from "./pic1.jpeg";
function DonateUs() {

  return (
    <div className="donationConatainer">
    <div className="donationImages">
      <img src={pic1}/>
      <div className="textBox">
        <p>
          lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
    <div className="donationContents">

      <ul className="projectsStyling ">
        <li className="mh3">
          <a className="projectsUnderline" href="#">Project 1</a>
        </li>
        <li className="mh3">
          <a className="projectsUnderline" href="#">Project 2</a>
        </li>
        <li className="mh3">
          <a className="projectsUnderline" href="#">Project 3</a>
        </li>
        <li className="mh3">
          <a className="projectsUnderline" href="#">Project 4</a>
        </li>
        <li className="mh3">
          <a className="projectsUnderline" href="#">Project 5</a>
        </li>
      </ul>

      <div className="donationAmount">
        <h3>I wish To Give</h3>
        <ul className="donationAmountList">
          <li><input type="radio" id="1000" name="INR" value="1000"/>
            INR 1000</li>
          <li><input type="radio" id="2000" name="INR" value="2000"/>
            INR 2000</li>
          <li><input type="radio" id="3000" name="INR" value="3000"/>
            INR 3000</li>
          <li><input type="radio" id="4000" name="INR" value="4000"/>
            INR 4000</li>
        </ul>
        <input className="donateTextbox mr5" type="text" name="donate" placeholder="Enter Amount"/>
        <a class="f5 link dim br2 ph3 pv2 white" href="" style={{
            backgroundColor: "#e88f0a"
          }}>Donate Now</a>
      </div>
    </div>

  </div>
);

}
export default DonateUs;
