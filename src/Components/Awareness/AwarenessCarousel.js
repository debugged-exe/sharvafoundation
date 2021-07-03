import React, {useState,useEffect} from 'react';
import './AwarenessCarousel.css';
import Carousel from 'react-elastic-carousel';


function AwarenessCarousel() {
  const breakPoints = [
    {
      showArrows: false
    }
  ]
  const [aware, setAware] = useState([]);
  useEffect(() => {
    fetch("https://thawing-shelf-77571.herokuapp.com/acarousel")
    .then(response => response.json())
    .then(res => {
      if (res[0].backimg) {
        setAware(res);
      }
    }).catch(error => {
      console.log(error);
    })

  }, [])
return(
  <Carousel  enableAutoPlay={true} autoPlaySpeed={2000} breakPoints={breakPoints}>
  {
      aware.map((item,index)=>{
        return(
          <div className='slide1 flex justify-center items-center font-size flex-column' style={{background:`url(${item.backimg}) no-repeat center center`,backgroundSize:'cover'}}>
              <div data-aos="fade-up" data-aos-duration={"1000"} >
              <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
              </div>
          </div>
        )
      })
    }
  </Carousel>

);
}
export default AwarenessCarousel;
