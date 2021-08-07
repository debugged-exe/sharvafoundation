import React, { useState } from 'react';
import "./Donate.css";
import {HashLink as Link} from "react-router-hash-link";
import { MdSecurity } from 'react-icons/md';

import DonationDetails from "./DonationDetails"

function Donate() {
  const [formIsOpen, setFormIsOpen] = useState('none');
  const [header, setHeader] = useState("Give Her Wings to Fly");
  const [i, seti] = useState(0);
  const [toggleState, settoggleState] = useState(1);
  const [toggleDonate,settoggleDonate]=useState(1);
  const toggleTab = (index) => {
    settoggleState(index);
  }
  const [donationEvent,setDonationEvent]=useState('none');


  const [Amount, setAmount] = useState("");
  var list = [
    {
      img: 'https://i.imgur.com/PB6v6SB.jpg',
      tagline: "Due to the inability to effectively manage menstruation 1 out of 5 Indian school girls skip school or drop out of school entirely due to lack of menstrual products and poor sanitation. This critical unavailability of sanitary products is a major barrier to education for girls of school-going age. We have distributed 4000+ sanitary pads in Pune & Jammu. We supported 30 school girls with sanitary pads to make sure that they don't feel uncomfortable",
    },
    {
      img: 'https://i.imgur.com/VmL5Rey.png',
      tagline: "India has the misfortune of having the largest number of blind persons in the world. Blindness is a disability, which one can overcome with proper training and guidance. Persons affected by blindness need opportunities for quality education, skills, training. rehabilitation, employment, and a full social and family life. We here at Sharva Foundation have created a platform for them. We'll showcase their talent & help them to get more jobs.",
    },
    {
      img: 'https://i.postimg.cc/BQ9kSW7d/rightimg.jpg',
      tagline: "Tackling hunger on the frontline of emergencies is critical, but we also need long-lasting solutions. That's why we work to help people everywhere get the food they need to survive and thrive. Hunger causes a range of problems and the most severe among these is malnutrition",
    },
    {
      img: 'https://i.postimg.cc/gkv8TKkP/background.jpg',
      tagline: "The Constitution of India ensures equality, freedom, justice, and dignity of all individuals and implicitly mandates an inclusive society for all including Transgender persons. In recent years, there have been significant changes in the perception of society towards transgenders.  We at Sharva Foundation, are trying our level best to help and uplift the community. We are providing them with essential items for their daily day-to-day use.",
    },
    {
      img: 'https://i.imgur.com/Galujig.jpg',
      tagline: "Female literacy is very low in rural villages of India, girls are kept away from formal schooling and they are married by arrangement in their teenage years. This has some serious consequences such as poor health and loss of equal opportunities, to individuals, families, communities, and to the country.Therefore the main aim of the project is to improve female literacy in the rural villages of India by raising awareness about the importance of girl’s education and supporting girls from poor families.",
    }
  ]

  return (

    <div>


      <div className="donation-Container" style={{background:` rgba(0, 0, 0, .6) url(${list[i].img} ) no-repeat center center/cover `,backgroundBlendMode:"darken"}}>
        <div>
          <h1 className="mt5 tc white pt2">Make a Contribution!</h1>
        </div>
        <div className="titles-bar">
          <ul className="project-titles pt2 pb2 ">
            <li className={toggleState === 1 ? "mh3 active" : "projectsUnderline"} onClick={() =>{ toggleTab(1);seti(0); setHeader("Give Her Wings to Fly")}}>
              <p className="projectsUnderlineColor" href="#" >Give Her Wings to Fly</p>
            </li>
            <li className={toggleState === 2 ? "mh3 active" : "projectsUnderline"} onClick={() => {toggleTab(2);seti(1); setHeader("Project Ruya")}}>
              <p className="projectsUnderlineColor" href="#" >Project Ruya</p>
            </li>
            <li className={toggleState === 3 ? "mh3 active" : "projectsUnderline"} onClick={() =>{ toggleTab(3);seti(2); setHeader("Food for Cause")}}>
              <p className="projectsUnderlineColor" href="#" >Food for Cause</p>
            </li>
            <li className={toggleState === 4 ? "mh3 active" : "projectsUnderline"} onClick={() => {toggleTab(4);seti(3); setHeader("Strive With Pride")}}>
              <p className="projectsUnderlineColor" href="#" >Strive With Pride</p>
            </li>
            <li className={toggleState === 5 ? "mh3 active" : "projectsUnderline"} onClick={() =>{ toggleTab(5);seti(4); setHeader("As Free As a Bird")}}>
              <p className="projectsUnderlineColor" href="#" >As Free As a Bird</p>
            </li>
          </ul>
        </div>


        <div className="donationBox  flex justify-center items-center">
          <div className="donation-Images white f4 " style={{maxHeight:"620px"}}>
            <div className="pa3-ns white">
              <h1>{header}</h1>
              <p style={{textAlign:"justify"}}> {list[i].tagline} </p>
            </div>
          </div>


          <div style={{height:"620px",lineHeight:"1.5",letterSpacing:"1.5px"}} className="donationAmount">
              <div style={{backgroundColor:"white"}} className="flex flex-column justify-center h-100 ph2-ns br4">
                <div className="flex justify-center items-center mb4">
                  <MdSecurity color="green" size="2rem" />
                  <p>Secure Donation</p>
                </div>
                <div className="flex flex-column justify-center items-center mb2">
                  <div className="flex justify-center items-center mb4">
                    <p  className={toggleDonate === 1 ? "f4 link pointer br2 hover-btn  dib white pa3 mr2 donateActive" : "f4 link pointer br2 hover-btn  dib black pa3 mr2-ns mr2"} onClick={() => settoggleDonate(1)} >GIVE ONCE</p>
                    <p  className={toggleDonate === 2 ? "f4 link pointer br2 hover-btn  dib white pa3 mr2 donateActive" : "f4 link pointer br2 hover-btn  dib black pa3 mr2-ns mr2"} onClick={() => settoggleDonate(2)} >MONTHLY</p>
                  </div>
                  <div className="flex justify-center items-center mb3 mr2 ml2">
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3-ns mr3" onClick={()=>{setAmount(1000);setFormIsOpen('block')}}>₹ 1000</p></Link>
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3-ns mr3" onClick={()=>{setAmount(2000);setFormIsOpen('block')}}>₹ 2000</p></Link>
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3" onClick={()=>{setAmount(3000);setFormIsOpen('block')}}>₹ 3000</p></Link>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3-ns mr3" onClick={()=>{setAmount(4000);setFormIsOpen('block')}}>₹ 4000</p></Link>
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3-ns mr3" onClick={()=>{setAmount(5000);setFormIsOpen('block')}}>₹ 5000</p></Link>
                    <Link to="/donatenow/#donateForm"><p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3" onClick={()=>{setAmount(6000);setFormIsOpen('block')}}>₹ 6000</p></Link>
                  </div>
                  <input type="text" style={{height:"50px", width:"326px"}} className="ph2 f4 mt4 mb4 placeholder" placeholder="Enter your amount INR" onChange={(event)=>setAmount(event.target.value)} />
                  <Link to="/donatenow/#donateForm"><p style={{ backgroundColor: "#e88f0a" }} className="grow f4 link pointer br2 ph3 pv2 mb2 dib white shadow-2 pa3 b" onClick={()=>setFormIsOpen('block')} >Donate</p></Link>
                </div>
              </div>
            </div>
        </div>

        <div id="donateForm " >
        <div className="flex justify-center pt5 tc">
          <div className="donationForm " style={{display:`${formIsOpen}`}} >
            <form>
              <div className="modalHeader">
                <h2 >Donation</h2>
              </div>
              <div className="inputBox ">
                <input type="text" name=""  placeholder="Name" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

              </div>
              <div className="inputBox ">
                <input type="text" name="" placeholder="Email-id" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

              </div>
              <div className="inputBox ">
                <input type="number" name="" placeholder="Phone Number" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

              </div>
              <div className="inputBox ">
                <input type="number" value={Amount} name="" placeholder="Donate Amount" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

              </div>
              <div className="inputBox ">
                <input type="text" name="" placeholder="City" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

              </div>
              <div className="inputBox ">
                <input type="submit" name="" value="Send"></input>
              </div>
            </form>
          </div>
        </div>
      </div>



      </div>

     

  
    </div>
  );
}

export default Donate;
