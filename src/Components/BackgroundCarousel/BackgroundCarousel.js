import React,{useState,useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import './BackgroundCarousel.css';
import {Link} from 'react-router-dom';





const BackgroundCarousel = () => {
  const [bgcarousel,setCarousel]=useState([]);
  useEffect(() => {
      fetch("https://thawing-shelf-77571.herokuapp.com/bgcarousel")
      .then(response => response.json())
      .then(res => {
        if (res[0].bgimg) {
          setCarousel(res);
        }
      }).catch(error => {
        console.log(error);
      })

    },[])
    return(
        <div style={{overflow:"hidden"}}>
            <Carousel style={{position:"relative",right:"-10px",left:"-10px",width:"102%",height:'95vh'}}  enableAutoPlay={true} autoPlaySpeed={5000} showArrows={false} pagination={false}>
            {
              bgcarousel.map((item,index)=>{
                  return(
                    <div className='slide1 flex justify-center items-center font-size flex-column' style={{background: `rgba(0,0,0,0.5) url(${item.bgimg}) no-repeat center center`,backgroundSize:'cover'}}>
                        <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <a href="https://rzp.io/l/02C64fT" className="f4  link  br2 ba ph3 pv2 mb2 dib near-white caroButton">Donate Now</a>
                        </div>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
    );
}

export default BackgroundCarousel;
