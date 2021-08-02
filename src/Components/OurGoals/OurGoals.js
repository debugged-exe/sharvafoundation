import React, { useState,useEffect } from 'react';
import './OurGoals.css';
import Carousel from 'react-elastic-carousel';
import { HashLink as Link } from 'react-router-hash-link';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 760, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
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

  }, [])

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
        <div>
          <div className="join-box mv5 ">
                <p className="join-head fw6 " style={{ fontSize: '35px' }}>Join Us Now!!</p>
                <div className="button-div">
                    <Link to="/joinus/#survey"><button onClick={() => setShow(true)} className=" fw6 bg-white black pa3 ph4 f4 grow pointer" style={{ borderRadius: '8px', border: 'none' }}>
                        Join Us
                    </button></Link>
                </div>
            </div>
            <div className="ourGoals mt4 pa3">
                <div className="mw7 mw7-m mw7-ns center topText  ">
                    <h2 className="center" style={{ paddingBottom: '10px', textDecoration: 'underline', textDecorationColor: '#e88f0a', textAlign: 'center' }}>OUR GOALS</h2>
                    <p className="lh-copy " style={{ textAlign: "center" }}>
                        The optimus goal of Sharva Foundation is to be completely equipped and primed with relief funds so as to be ready with an optimum amount for any event or uncalled situation.
                    </p>
                </div>
            </div>
            <Carousel breakPoints={breakPoints} showArrows={false} >
              {
              goal.map((item, index) => {
                return (<div className="newcard mv5" >
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
                        
                        <b> ₹ {item.initialAmount} </b>
                         raised out of ₹ {item.totalCost}</p>
                      <div className="skill-bar">
                        <div className="skill-per" per="90" style={{width:`${(item.initialAmount/item.totalCost)*100}%`}}></div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Link to="/donatenow/#donateImage" className="link br2 ph3 pv2 mb2 tc dib cardButton">Donate Now</Link>
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
            <div className="join-box events-click-box mv5">
                <p className="join-head fw6 " style={{ fontSize: '35px' }}>Ongoing Projects</p>
                <div className="button-div">
                    <Link to="events-summary/#eventsummary"><button onClick={() => setShow(true)} className=" fw6 bg-white black pa3 ph4 f4 grow pointer" style={{ borderRadius: '8px', border: 'none' }}>
                        Click Here
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default OurGoals;
