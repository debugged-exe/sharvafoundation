import React,{useState,useEffect} from 'react';
import './Merchandise.css';
import Carousel from 'react-elastic-carousel';


function Merchandise(){

    const [merch,setMerch]=useState([]);
  useEffect(() => {
      fetch("https://thawing-shelf-77571.herokuapp.com/merchandise")
      .then(response => response.json())
      .then(res => {
        if (res[0].merchimg) {
          setMerch(res);
        }
      }).catch(error => {
        console.log(error);
      })

    },[])

    return(
        <div className="merch-container cf pa2">

<div className="fl merch pa3 merch-text mt4 ">
                <p className="f3 b ">OWN YOURS NOW!</p><hr/>
                <p className="f5 black tl">We at Sharva Foundation are elated to announce that our merchandise is  here!<br/>
We as a growing NGO wanted to recognise all of your efforts by giving you these as a token of appreciation! 
The price for the Merchandise is ₹350+ shipping charges *(shipping charges will be applicable based on your address and it will not exceed ₹50) .
 </p>
                <div className=" flex justify-center align-center  mt3 "  >
                    <button className=" fw4 white pa3 ph4 f5 grow pointer shadow-5 " style={{ borderRadius: '8px', border: 'none',backgroundColor: "#e88f0a"  }}>
                      <a className="white no-underline"  href="https://forms.gle/NZQYXCUsFrBUhFSo7" target='_blank'>  Get your Merchandise!</a>
                    </button>
                </div>
            </div>

            <div className="fl merch pa2  pa2-m ">
            <Carousel style={{position:"relative",objectFit:"contain",width:"100%",height:"500px"}}  enableAutoPlay={true} autoPlaySpeed={5000} showArrows={false} pagination={true}>
            {
              merch.map((item,index)=>{
                  return(
                    <div key={index} className='slide1 merchimg flex justify-center items-center font-size flex-column mt2 ' style={{background: `rgba(0,0,0,0) url(${item.merchimg}) no-repeat center center`,backgroundSize:'contain'}}>
                    </div>
                  )
                })
              }
            </Carousel>
            </div>
            
           
            

        </div>
    );
}

export default Merchandise;