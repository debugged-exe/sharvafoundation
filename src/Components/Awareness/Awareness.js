import React from 'react';
//css
import './Awareness.css';
import Carousel from 'react-elastic-carousel';
import BackgroundCarousel from '../BackgroundCarousel/BackgroundCarousel';
import pic1 from "../../Database/1.jpeg";

const breakPoints = [
    { showArrows: false },

]

function Awareness() {
    return (
        <div className="awareness-body">

            <Carousel enableAutoPlay={true} autoPlaySpeed={2000} breakPoints={breakPoints}>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"}>
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <h3 className="tagline">लोका: समस्ता: सुखिनो भवन्तु ।</h3>
                    </div>
                </div>
            </Carousel>


            <div className="awareness-card">
                <div className="awareness-card-text">
                    <h1>Top heading</h1>
                    <h4>Date</h4>
                    <h4>Time</h4>
                    <h4>Platform</h4>
                    <h4>Speaker</h4>
                    <p className="description">Description</p>
                    <a className="f5 link dim br2 ph3 pv2 white nav-donate" href="/" style={{ backgroundColor: "#e88f0a" }} >Register Now</a>
                </div>
                <div className="awareness-card-img">
                    <img src={pic1} alt="Alt text" />
                </div>
            </div>
            <div className="awareness-card">
                <div className="awareness-card-img">
                    <img src={pic1} alt="Alt text" />
                </div>
                <div className="awareness-card-text">
                    <h1>Top heading</h1>
                    <h4>Date</h4>
                    <h4>Time</h4>
                    <h4>Platform</h4>
                    <h4>Speaker</h4>
                    <p className="description">Description</p>
                    <a className="f5 link dim br2 ph3 pv2 white nav-donate" href="/" style={{ backgroundColor: "#e88f0a" }} >Register Now</a>
                </div>
            </div>
            <div className="awareness-card">
                <div className="awareness-card-text">
                    <h1>Top heading</h1>
                    <h4>Date</h4>
                    <h4>Time</h4>
                    <h4>Platform</h4>
                    <h4>Speaker</h4>
                    <p className="description">Description</p>
                    <a className="f5 link dim br2 ph3 pv2 white nav-donate" href="/" style={{ backgroundColor: "#e88f0a" }} >Register Now</a>
                </div>
                <div className="awareness-card-img">
                    <img src={pic1} alt="Alt text" />
                </div>
            </div>
        </div>)
}

export default Awareness;