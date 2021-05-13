import React from 'react';
import Carousel from 'react-elastic-carousel'
import './BackgroundCarousel.css';

import Logo from './sharva.png';

const breakPoints=[
    {showArrows:false},
    
]

const BackgroundCarousel = () => {
    return(
            <Carousel enableAutoPlay={true} autoPlaySpeed={2000} breakPoints={breakPoints}>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                    लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                        <button >Donate</button>
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                <div data-aos="fade-up" data-aos-duration={"1000"} className='b white stroke tl'>
                लोका: समस्ता: सुखिनो भवन्तु ।
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"1000"} >
                        <button >Donate</button>
                    </div>
                </div>
            </Carousel>

    );
}

export default BackgroundCarousel
