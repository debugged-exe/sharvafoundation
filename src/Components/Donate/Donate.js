import React,{useState} from 'react';
import "./Donate.css";
import Modal from 'react-modal';
import pic1 from "../../Database/1.jpeg";
import pic2 from "../../Database/2.jpeg";
import pic3 from "../../Database/3.jpeg";
import pic4 from "../../Database/4.jpeg";
import pic5 from "../../Database/5.jpeg";


function Donate(){
  const [modalIsOpen,setmodalIsOpen]=useState(false);
    const [i,seti]=useState(0);
    const[toggleState,settoggleState]=useState(1);
    const toggleTab =(index) => {
      settoggleState(index);
    }
    const[Amount,setAmount]=useState("");
    var list=[
        {
            img:pic1,
            tagline:"Due to the inability to effectively manage menstruation 1 out of 5 Indian school girls skip school or drop out of school entirely due to lack of menstrual products and poor sanitation. This critical unavailability of sanitary products is a major barrier to education for girls of school-going age. We have distributed 4000+ sanitary pads in Pune & Jammu. We supported 30 school girls with sanitary pads to make sure that they don't feel uncomfortable",
        },
        {
            img:pic2,
            tagline:"India has the misfortune of having the largest number of blind persons in the world. Blindness is a disability, which one can overcome with proper training and guidance. Persons affected by blindness need opportunities for quality education, skills, training. rehabilitation, employment, and a full social and family life. We here at Sharva Foundation have created a platform for them. We'll showcase their talent & help them to get more jobs.",
        },
        {
            img:pic3,
            tagline:"Tackling hunger on the frontline of emergencies is critical, but we also need long-lasting solutions. That's why we work to help people everywhere get the food they need to survive and thrive. Hunger causes a range of problems and the most severe among these is malnutrition",
        },
        {
            img:pic4,
            tagline:"The Constitution of India ensures equality, freedom, justice, and dignity of all individuals and implicitly mandates an inclusive society for all including Transgender persons. In recent years, there have been significant changes in the perception of society towards transgenders.  We at Sharva Foundation, are trying our level best to help and uplift the community. We are providing them with essential items for their daily day-to-day use.",
        },
        {
            img:pic5,
            tagline:"Female literacy is very low in rural villages of India, girls are kept away from formal schooling and they are married by arrangement in their teenage years. This has some serious consequences such as poor health and loss of equal opportunities, to individuals, families, communities, and to the country.Therefore the main aim of the project is to improve female literacy in the rural villages of India by raising awareness about the importance of girl’s education and supporting girls from poor families.",
        }
    ]
return(

<div>
    <div className="donation-Container">
    <div>
    <img className="donation-top-image" src={pic1} />
    </div>
        <div className="titles-bar">
            <ul className="project-titles pt2 pb2 ">
                <li className={toggleState===1 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(1)}>
                    <p className="projectsUnderlineColor"  href="#" onClick={()=>seti(0)}> Give Her Wings</p>
                </li>
                <li className={toggleState===2 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(2)}>
                    <p className="projectsUnderlineColor" href="#" onClick={()=>seti(1)}>Project Ruya</p>
                </li>
                <li className={toggleState===3 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(3)}>
                    <p className="projectsUnderlineColor" href="#" onClick={()=>seti(2)}>Hunger Free India</p>
                </li>
                <li className={toggleState===4 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(4)}>
                    <p className="projectsUnderlineColor" href="#" onClick={()=>seti(3)}>Strive With Pride</p>
                </li>
                <li className={toggleState===5 ? "mh3 active" : "projectsUnderline"} onClick={() => toggleTab(5)}>
                    <p className="projectsUnderlineColor" href="#" onClick={()=>seti(4)}>As Free As a Bird</p>
                </li>
            </ul>
        </div>


    <div className="donationBox flex justify-center">

        <div className="donation-Images">

            <div className="donateImages" >
                    <img src={list[i].img} style={{height:'400px',width:'100%',objectFit:'fill'}}/>
            </div>
            <div className="donate-text">
            <p> {list[i].tagline} </p>
            </div>

        </div>

        <div className="donationAmount">
              <h3>I wish To Give</h3>
              <ul className="donationAmountList">
                <li><input type="radio" id="1000" name="INR" value="1000" onClick={()=>setAmount(1000)}/>
                  INR 1000</li>
                <li><input type="radio" id="2000" name="INR" value="2000" onClick={()=>setAmount(2000)}/>
                  INR 2000</li>
                <li><input type="radio" id="3000" name="INR" value="3000" onClick={()=>setAmount(3000)}/>
                  INR 3000</li>
                <li><input type="radio" id="4000" name="INR" value="4000" onClick={()=>setAmount(4000)}/>
                  INR 4000</li>
              </ul>
              <div className="donateDiv">
              <input className="donateTextbox  mr5" type="number" name="donate" placeholder="Enter Amount" onChange={(event)=>setAmount(event.target.value)} />
            <button class="f5 link br2 ph3 pv2 mt2  white donationModalButton" href=""  onClick={() => setmodalIsOpen(true)} value={Amount}  >Donate Now</button>
        </div>
        </div>
    </div>



    </div>
    <Modal  isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
      <div className="flex justify-center tc">
    <div className="donationForm">
      <form>
      <div className="modalHeader">
        <h2>Donation</h2>
        <span className="modalcloseButton" onClick={()=>setmodalIsOpen(false)}>X</span>
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
      <input type="number"  value={Amount} name="" required="required"></input>
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
