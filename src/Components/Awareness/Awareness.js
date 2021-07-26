import React, {useState, useEffect} from 'react';
import './Awareness.css';
import AwarenessCarousel from "./AwarenessCarousel.js"

function Awareness() {

  const [aware, setAware] = useState([]);
  useEffect(() => {
    fetch("https://thawing-shelf-77571.herokuapp.com/awareness")
    .then(response => response.json())
    .then(res => {
      if (res[0].heading) {
        setAware(res);
      }
    }).catch(error => {
      console.log(error);
    })

  }, [])

  return (

    <div className="awareness-body">
      {/* <AwarenessCarousel /> */}
    <div>
      <h1 className="mt5 pt2 tc">Upcoming Sessions</h1>
      <h4 className="tc">Click on the register button below to register for a particular event</h4>
      {
        aware.map((item, index) =>{
            return(
              <div className="awareness-card">
                <div className="awareness-card-img">
                  <img src={item.img} alt="Alt text"/>
                </div>
                <div className="awareness-card-text">
                  <h1>{item.heading}</h1>
                  <h4>{item.date}</h4>
                  <h4>{item.time}</h4>
                  <h4>{item.platform}</h4>
                  <h4>{item.speaker}</h4>
                  <p className="description">{item.desp}</p>
                  <a className="f5 link dim br2 ph3 pv2 white nav-donate" href="/" style={{
                      backgroundColor: "#e88f0a"
                    }}>Register Now</a>
                </div>
              </div>
            )
        })
      }
    </div>
  </div>
)
}

export default Awareness;
