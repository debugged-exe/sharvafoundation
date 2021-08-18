import React, { useState,useLayoutEffect } from 'react';
import "./Donate.css";



function Donate() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  })

  
  const [header, setHeader] = useState("Give Her Wings to Fly");
  const [i, seti] = useState(0);
  const [toggleState, settoggleState] = useState(1);
  
  const toggleTab = (index) => {
    settoggleState(index);
  }

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
          <h1 className="mt5 tc white pt2">Ongoing Projects</h1>
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
              <p style={{textAlign:"center"}}> {list[i].tagline} </p>
            </div>
          </div>


        </div>




      </div>

     

  
    </div>
  );
}

export default Donate;
