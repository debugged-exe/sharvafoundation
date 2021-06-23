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
            tagline:'1st title tagline-Give Her Wings Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun'
        },
        {
            img:pic2,
            tagline:'2nd title tagline-Project Ruya  Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun',
        },
        {
            img:pic3,
            tagline:'3rd title tagline-Hunger Free India  Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun',
        },
        {
            img:pic4,
            tagline:'4th title tagline-Strive with Pride  Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun',
        },
        {
            img:pic5,
            tagline:'5th title tagline-As free as a bird  Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun Kun fayakun Kun fayakun fayakun Fayakun fayakun fayakun',
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
              <input className="donateTextbox mr5" type="number" name="donate" placeholder="Enter Amount" onInput={()=>setAmount()} />
            <button class="f5 link br2 ph3 pv2  white donationModalButton" href=""  onClick={() => setmodalIsOpen(true)} value={Amount} >Donate Now</button>
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
