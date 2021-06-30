import React, {useState, useEffect} from 'react';
import './Awareness.css';
import Carousel from 'react-elastic-carousel';
import AwarenessCarousel from "./AwarenessCarousel.js"

function Awareness() {

  const [aware, setAware] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/awareness")
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
      <AwarenessCarousel />
    <div>

      {
        aware.map((item, index) =>
        {
          if(index===0 || (index)%2===0){
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

          }else if (index===1 || (index)%2!==0){
            return(

              <div className="awareness-card">

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
                <div className="awareness-card-img">
                  <img src={item.img} alt="Alt text"/>
                </div>
              </div>
            )
          }

        })
      }
    </div>
  </div>
)
}

export default Awareness;
