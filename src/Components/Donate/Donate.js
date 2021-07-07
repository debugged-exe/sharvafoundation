import React, { useState } from 'react';
import "./Donate.css";
import Modal from 'react-modal';
import pic1 from "../../Database/1.jpeg";
import pic2 from "../../Database/2.jpeg";
import pic3 from "../../Database/3.jpeg";
import pic4 from "../../Database/4.jpeg";
import pic5 from "../../Database/5.jpeg";
import { MdSecurity } from 'react-icons/md';

function Donate() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [i, seti] = useState(0);
  const [toggleState, settoggleState] = useState(1);
  const toggleTab = (index) => {
    settoggleState(index);
  }
  const [Amount, setAmount] = useState("");
  var list = [
    {
      img: pic1,
      tagline: "Due to the inability to effectively manage menstruation 1 out of 5 Indian school girls skip school or drop out of school entirely due to lack of menstrual products and poor sanitation. This critical unavailability of sanitary products is a major barrier to education for girls of school-going age. We have distributed 4000+ sanitary pads in Pune & Jammu. We supported 30 school girls with sanitary pads to make sure that they don't feel uncomfortable",
    },
    {
      img: pic2,
      tagline: "India has the misfortune of having the largest number of blind persons in the world. Blindness is a disability, which one can overcome with proper training and guidance. Persons affected by blindness need opportunities for quality education, skills, training. rehabilitation, employment, and a full social and family life. We here at Sharva Foundation have created a platform for them. We'll showcase their talent & help them to get more jobs.",
    },
    {
      img: pic3,
      tagline: "Tackling hunger on the frontline of emergencies is critical, but we also need long-lasting solutions. That's why we work to help people everywhere get the food they need to survive and thrive. Hunger causes a range of problems and the most severe among these is malnutrition",
    },
    {
      img: pic4,
      tagline: "The Constitution of India ensures equality, freedom, justice, and dignity of all individuals and implicitly mandates an inclusive society for all including Transgender persons. In recent years, there have been significant changes in the perception of society towards transgenders.  We at Sharva Foundation, are trying our level best to help and uplift the community. We are providing them with essential items for their daily day-to-day use.",
    },
    {
      img: pic5,
      tagline: "Female literacy is very low in rural villages of India, girls are kept away from formal schooling and they are married by arrangement in their teenage years. This has some serious consequences such as poor health and loss of equal opportunities, to individuals, families, communities, and to the country.Therefore the main aim of the project is to improve female literacy in the rural villages of India by raising awareness about the importance of girl’s education and supporting girls from poor families.",
    }
  ]
  return (

    <div>
      <div className="donation-Container">
        <div>
          <img className="donation-top-image" src={pic1} alt="donate" />
        </div>
        <div className="titles-bar">
          <ul className="project-titles pt2 pb2 ">
            <li className={toggleState === 1 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(1)}>
              <p className="projectsUnderlineColor" href="#" onClick={() =>{ seti(0); setHeader("Give Her Wings")}}>Give Her Wings</p>
            </li>
            <li className={toggleState === 2 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(2)}>
              <p className="projectsUnderlineColor" href="#" onClick={() =>{ seti(1); setHeader("Project Ruya")}}>Project Ruya</p>
            </li>
            <li className={toggleState === 3 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(3)}>
              <p className="projectsUnderlineColor" href="#" onClick={() =>{ seti(2); setHeader("Hunger Free India")}}>Hunger Free India</p>
            </li>
            <li className={toggleState === 4 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(4)}>
              <p className="projectsUnderlineColor" href="#" onClick={() =>{ seti(3); setHeader("Strive With Pride")}}>Strive With Pride</p>
            </li>
            <li className={toggleState === 5 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(5)}>
              <p className="projectsUnderlineColor" href="#" onClick={() => { seti(4); setHeader("As Free As a Bird")}}>As Free As a Bird</p>
            </li>
          </ul>
        </div>


        <div className="donationBox flex justify-center items-center">

          <div className="donation-Images shadow-5">
            <div className="donateImages" >
              <img src={list[i].img} style={{ height: '260px', width: '100%', objectFit: 'fill' }} alt="donate" />
            </div>
            <div className="pa3">
              <h1>{header}</h1>
              <p> {list[i].tagline} </p>
            </div>
          </div>

          <div style={{height:"620px",lineHeight:"1.5",letterSpacing:"1.5px"}} className="donationAmount">
              <div style={{backgroundColor:"#e88f0a0f"}} className="flex flex-column justify-center h-100 ph4 shadow-4 br2">
                <div className="flex justify-center items-center mb4">
                  <MdSecurity color="green" size="2rem" />
                  <p>Secure Donation</p>
                </div>
                <div className="flex flex-column justify-center items-center mb2">
                  <div className="flex justify-center items-center mb4">
                    <p style={{ backgroundColor: "#e88f0a" }} className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib white pa3 mr2">GIVE ONCE</p>
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black pa3 mr2">MONTHLY</p>
                  </div>
                  <div className="flex justify-center items-center mb3">
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3">₹ 1000</p>
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3">₹ 2000</p>
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3">₹ 3000</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3">₹ 4000</p>
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3 mr3">₹ 5000</p>
                    <p className="f4 link pointer br2 hover-btn ph3 pv2 mb2 dib black shadow-2 pa3">₹ 6000</p>
                  </div>
                  <input type="text" style={{height:"50px", width:"326px"}} className="ph2 f4 mt4 mb4 placeholder" placeholder="Enter your amount INR" />
                  <p style={{ backgroundColor: "#e88f0a" }} className="grow f4 link pointer br2 ph3 pv2 mb2 dib white shadow-2 pa3 b">Donate</p>
                </div>
              </div>
            </div>
        </div>



      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
        <div className="flex justify-center tc">
          <div className="donationForm">
            <form>
              <div className="modalHeader">
                <h2>Donation</h2>
                <span className="modalcloseButton" onClick={() => setmodalIsOpen(false)}>X</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required"></input>
                <span> Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required"></input>
                <span> Email</span>
              </div>
              <div className="inputBox">
                <input type="number" name="" required="required"></input>
                <span> Phone No.</span>
              </div>
              <div className="inputBox">
                <input type="number" value={Amount} name="" required="required"></input>
                <span> Donate Amount.</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required"></input>
                <span>City</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send"></input>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Donate;
