import React from 'react';
import Carousel from 'react-elastic-carousel'
import './BackgroundCarousel.css';

import Logo from './sharva.png';

const breakPoints=[
    {showArrows:false},

]


const BackgroundCarousel = () => {
    return(
            <Carousel  enableAutoPlay={true} autoPlaySpeed={2000} breakPoints={breakPoints}>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4  link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"}>
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link   br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} >
                <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                    <a className="f4 link  br2 ba ph3 pv2 mb2 dib near-white caroButton" href="#0">Donate Now</a>
                    </div>
                </div>
            </Carousel>

    );
}

export default BackgroundCarousel;
