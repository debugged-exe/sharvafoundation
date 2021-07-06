import React,{useState,useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import './BackgroundCarousel.css';
import {Link} from 'react-router-dom';
import Logo from './sharva.png';




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

            <Carousel  enableAutoPlay={true} autoPlaySpeed={2000} showArrows={false} pagination={false}>
            {
                bgcarousel.map((item,index)=>{
                  return(
                    <div className='slide1 flex justify-center items-center font-size flex-column' style={{background:`url(${item.bgimg}) no-repeat center center`,backgroundSize:'cover'}}>
                        <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <Link to="/donatenow" className="f4  link  br2 ba ph3 pv2 mb2 dib near-white caroButton">Donate Now</Link>
                        </div>
                    </div>
                  )
                })
              }
            </Carousel>

    );
}

export default BackgroundCarousel;
