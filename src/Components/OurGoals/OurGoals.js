import React, { useState,useEffect,useLayoutEffect} from 'react';
import './OurGoals.css';
import ScriptTag from 'react-script-tag';
import Carousel from 'react-elastic-carousel';
import { HashLink as Link } from 'react-router-hash-link';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1,showArrows:false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 ,showArrows:false},
    { width: 760, itemsToShow: 3, itemsToScroll: 1,showArrows:true },
    { width: 1024, itemsToShow: 3, itemsToScroll: 1, },
    {pagination:true},

]

function OurGoals() {


  var percent=5;
  const [goal, setGoal] = useState([]);
  useEffect(() => {





    fetch("https://thawing-shelf-77571.herokuapp.com/goals").then(response => response.json()).then(res => {
      if (res[0].head) {
        setGoal(res);
        console.log(res.length);
      }
    }).catch(error => {
      console.log(error);
    })

  },


  [])

    const [hover1, toggleHover1] = useState(false);
    const [hover2, toggleHover2] = useState(false);
    const [show, setShow] = useState(false);

    const toggleHandler1 = () => {
        toggleHover1(!hover1)
    }

    const toggleHandler2 = () => {
        toggleHover2(!hover2)
    }
    return (
        <div id="ourgoals">
          <div className="flex justify-center "> 
          <div className=" join-box mv4 mh1 ">
                <p className="join-head  fw6 " style={{ fontSize: '35px' }}>Join Us Now!!</p>
                <div className="button-div">
                    <Link to="/joinus/#survey"><button onClick={() => setShow(true)} className=" fw6 bg-white black pa3 ph4 f4 grow pointer " style={{ borderRadius: '8px', border: 'none' }}>
                        Join Us
                    </button></Link>
                </div>
            </div>
          </div>
         
            
            <div className="ourGoals mt4 pa1">
                <div className="mw7 mw7-m mw7-ns center topText  ">
                    <h2 className="center" style={{ paddingBottom: '10px', textDecoration: 'underline', textDecorationColor: '#e88f0a', textAlign: 'center' }}>Our Recent Causes to Serve Better</h2>
                    <p className="lh-copy " style={{ textAlign: "center" }}>
                    Making society a better place to live in is neither a one-day task nor an individual???s job. Well, it is not impossible too but we, Sharva Foundation, need all the resources that we can garner to continue our constant efforts.<br /> The ongoing projects reflect our commitment towards the causes that need urgent or intense efforts. Give us a helping hand to make a real impact in the real world!
                    </p>
                </div>
            </div>
            <Carousel breakPoints={breakPoints} showArrows={true} >
              {
              goal.map((item, index) => {
                return (
                  <div key={index} className="newcard mv5" >
                  <div className="cardTop">
                    <img src={item.image} className="cardImg" alt="something"/>
                  </div>
                  <div className="cardBottom flex-column justify-center items-center h-100">
                    <div className="Detail">
                      <h4>
                        {item.head}
                      </h4>
                      <br />
                        {item.desp}
                      <p>

                        <b> ??? {item.initialAmount} </b>
                         raised out of ??? {item.totalCost}</p>
                      <div className="skill-bar">
                        <div className="skill-per" per="90" style={{width:`${(item.initialAmount/item.totalCost)*100}%`}}></div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center pt3">
                   <form>
                       {/* <ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HmatBPsKhfdW45" async></ScriptTag> */}
                    <div className="pv2  nav-donate">
                      <Link to="/scanner" className="f5 link dim br2 ph3 pv2 white " style={{ backgroundColor: "#e88f0a" }}>Donate</Link>
                    </div>
                  </form>
                  </div>

                    <div className="lastLine">
                      <div className="supporters">
                        <p>
                          <b>Location: {item.location}</b>
                        </p>
                      </div>
                      <div>
                        <a href={item.flyer} className="no-underline">
                          <b className="LearnColor">Learn More</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>)
              })
            }
            </Carousel>


        </div>
    )
}

export default OurGoals;
