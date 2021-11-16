import React, { useState,useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Events.css';
import 'react-alice-carousel/lib/alice-carousel.css';


function Events({initiative,setCarousel}) {

  const [drive,setDrive]=useState([]);
  var abc=[];

  const[hideShowMore,sethideShowMore]=useState('block');
    const[hideShowLess,sethideShowLess]=useState('none');


  useEffect(() => {
    if(initiative==="foodforcause"){
      fetch("https://thawing-shelf-77571.herokuapp.com/events")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })

    }
    else if (initiative==="strivewithpride") {
      fetch("https://thawing-shelf-77571.herokuapp.com/strive")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })


    }
    else if (initiative==="projectruya") {
      fetch("https://thawing-shelf-77571.herokuapp.com/ruya")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })


    }
    else if (initiative==="asfreeasabird") {
      fetch("https://thawing-shelf-77571.herokuapp.com/bird")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })


    }
    else if (initiative==="giveherwingstofly") {
      fetch("https://thawing-shelf-77571.herokuapp.com/wings")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })


    }

    else if (initiative==="projectgreen") {
      fetch("https://thawing-shelf-77571.herokuapp.com/projectgreen")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })

    }

    else if (initiative==="blooddonation") {
      fetch("https://thawing-shelf-77571.herokuapp.com/blooddonation")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })

    }


    else if (initiative==="covid19") {
      fetch("https://thawing-shelf-77571.herokuapp.com/covid19")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })
    }

    else if (initiative==="twenty") {
      fetch("https://thawing-shelf-77571.herokuapp.com/twenty")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })
    }
    else if (initiative==="twentyone") {
      fetch("https://thawing-shelf-77571.herokuapp.com/twentyone")
      .then(response => response.json())
      .then(res => {
        if (res[0].tagline) {
          setDrive(res);
        }
      }).catch(error => {
        console.log(error);
      })
    }
  }, [])

  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
            setVisible( visible + 3);
        sethideShowMore('none');
        sethideShowLess('block');
        }
      const showLessItems =() =>{
        setVisible(3);
        sethideShowLess('none');
        sethideShowMore('block');
      }

    const[showP,setShowPast]=useState(false);
    // const[recentA,setrecentA]=useState(false);
    // const[pastA,setpastA]=useState(false);


    // console.log(visible);


    return (
      <div>
        {
          drive.map((item,index)=>{
            return(


          
              <div className="events-1  mt5">



                  <div className="event-txt-img ">
                      {/* <div className="event-txt w-50-ns">
                          <h1>{item.tagline}</h1>
                          <p style={{ textAlign: "left" }}>
                            {item.description}
                          </p><br />
                        <h4 style={{ textAlign: "left" }}>
                            {item.question}
                          </h4>
                          <p style={{ textAlign: "left" }}>
                            {item.answer}
                          </p><br />
                          <p style={{ textAlign: "left" }}>
                            {item.description2}
                          </p><br />
                         <ul style={{paddingLeft:"20px"}}>
                          <li style={{ textAlign: "left" }}>
                              {item.point1}
                            </li>
                            <li style={{ textAlign: "left" }}>
                                {item.point2}
                              </li>
                            </ul><br />
                            <h4 style={{ textAlign: "left" }}>
                                {item.heading}
                              </h4>

                            <ul style={{paddingLeft:"20px"}}>
                              <li style={{ textAlign: "left" }}>
                                  {item.point3}
                                </li>
                                <li style={{ textAlign: "left" }}>
                                    {item.point4}
                                  </li>
                                </ul><br />

                      </div> */}
                      {/* <div id="event-img  w-100 " >
                      <p className="blue f3 pa1">{item.tagline}</p>
                          <img alt="" src={item.imgright}  className="image" style={{height:"80vh",width:"100vw",objectFit:"fill"}} />
                      </div> */}

                      <div className="event-img w-100 flex justify-center items-center font-size flex-column " style={{background: `rgba(0,0,0,0.5) url(${item.imgright}) no-repeat center center`,backgroundSize:'cover',height:"80vh"}}>
                      <h3 className="white">{item.tagline}</h3>
                      <p className="f4 pa3 white">{item.description}</p>
                      </div>
                      
                  </div>

                  <div className="past-recent-events mt4" >

                      <div className="recent-events">
                          <div className="heading">
                              <h1>OUR EVENTS</h1>
                              <hr id="recent-hr" />
                          </div>
                          {/* Recent Events grid */}
                          <div className="grid ">{
                              item.events.map((i,index)=>{
                                if(i.recent==='1'){
                                  abc= item.events.filter((a)=>a.recent==='0');
                                  return(

                                    <div className="pa3 ma3 tc" >
                                      <Link to="/eventdisplay/#project" onClick={(e)=>{setCarousel(i.image);}} >
                                         <img alt="" src={i.image[0]} className="gridImage pointer grow shadow-5" />
                                      </Link>
                                          <p className="onrightDate f4 b">{i.place}</p>
                                          {/* <p className="onrightDate">{i.date}</p> */}

                                    </div>

                                  )
                                }

                              })
                            }

                          </div>
                      </div>
                      {/* <div className="past-events">
                       {
                         abc.map((a,index)=>{
                           if(abc.length<0){
                             return(
                            <div></div>
                             )
                           }
                           else if( index===0){
                             return(
                               <div className="heading">
                                   <h1>PAST EVENTS</h1>
                                   <hr id="recent-hr" />
                               </div>
                             )
                           }

                         })
                       }
                          <div className="grid">
                           {
                              abc.slice(0,visible).map((i,index)=>{

                                return(
                                  <div className="pa3 ma3" >
                                  <Link to="/eventdisplay/#project" onClick={(e)=>{setCarousel(i.image);}} >
                                     <img alt="" src={i.image[0]} className="gridImage pointer grow shadow-5" />
                                  </Link>
                                        <p className="onrightDate f4 b">{i.place}</p>

                                      <p className="onrightDate">{i.date}</p>

                                  </div>



                                )

                              })
                            }

                          </div>
                      </div> */}
                  </div>
                  {/* <div>
                      {
                          showP ? drive : null
                      }
                      <div>
                      {
                        abc.map((a,index)=>{
                          if(abc.length<0){
                            console.log("done",abc.length);
                            return(
                           <div></div>
                            )
                          }
                          else if( index===0){
                            return(
                              <div className="showButtons mt2 mb2 flex justify-center">
                                  <div className="mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" style={{display:`${hideShowMore}`}}
  onClick={() => showMoreItems()}>Show More</div>
<div className=" mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" style={{display:`${hideShowLess}`}}
 onClick={() => showLessItems()}>Show Less</div>
                              </div>
                            )
                          }

                        })
                      }

                      </div>
                  </div> */}
              </div >


            )

          })
        }

      </div>

    )
}

export default Events;
