import React, {useState, useEffect} from 'react';
import './Awareness.css';
import Carousel from 'react-elastic-carousel';
import BackgroundCarousel from '../BackgroundCarousel/BackgroundCarousel';
import pic1 from "../../Database/1.jpeg";

const breakPoints = [
  {
    showArrows: false
  }
]
function Awareness() {

  const [aware, setAware] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/awareness")
    .then(response => response.json())
    .then(res => {
      if (res[0].heading) {
        setAware(res);
        console.log(res[0].heading);
      }
    }).catch(error => {
      console.log(error);
    })

  }, [])

  return (

    <div className="awareness-body">

    <Carousel enableAutoPlay={true} autoPlaySpeed={2000} breakPoints={breakPoints}>
      <div className='slide1 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide2 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide3 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide1 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide2 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide3 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide1 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide2 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
      <div className='slide3 flex justify-center items-center font-size flex-column'>
        <div data-aos="fade-up" data-aos-duration={"1000"}>
          <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
        </div>
      </div>
    </Carousel>

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
