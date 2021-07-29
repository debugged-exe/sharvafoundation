import React, { useState,useEffect,useLayoutEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Events.css';
import 'react-alice-carousel/lib/alice-carousel.css';


function Events({initiative,setCarousel}) {

  const [drive,setDrive]=useState([]);
  var abc=[];
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  })
  useEffect(() => {
    if(initiative==="hungerfreeindia"){
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
    else if (initiative==="giveherwings") {
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
  }, [])

  const [visible, setVisible] = useState(3);

  	const showMoreItems = () => {
  		setVisible( visible + 3);
  	}
    const showLessItems =() =>{
      setVisible(3);
    }

    const[showP,setShowPast]=useState(false);
    const[recentA,setrecentA]=useState(false);
    const[pastA,setpastA]=useState(false);


    console.log(visible);


    return (
      <div>
        {
          drive.map((item,index)=>{
            return(
              <div className="events-1 ba mt5">
                  {/* The 100% width image */}
                  {/* 50% text and 50% image responsive div */}
                  <div className="event-txt-img w-100">
                      <div className="event-txt w-50-ns">
                          <h1>{item.tagline}</h1>
                          <p style={{ textAlign: "left" }}>
                            {item.description}
                          </p>
                      </div>
                      <div id="event-img  w-50-n" >
                          <img alt="" src={item.imgright}  className="image" style={{height:"450px",width:"600px",objectFit:"cover"}} />
                      </div>
                  </div>

                  <div className="past-recent-events" >

                      <div className="recent-events">
                          <div className="heading">
                              <h1>RECENT EVENTS</h1>
                              <hr id="recent-hr" />
                          </div>
                          {/* Recent Events grid */}
                          <div className="grid ">{
                              item.events.map((i,index)=>{
                                if(i.recent==='1'){
                                  abc= item.events.filter((a)=>a.recent==='0');
                                  return(
                                    <div>
                                    <div className="pa3 ma3" >
                                      <Link to="/eventdisplay/#project" onClick={(e)=>{setCarousel(i.image);}} >
                                         <img alt="" src={i.image[0]} className="gridImage pointer grow shadow-5" />
                                      </Link>
                                          <p className="onrightDate f3 b">{i.place}</p>
                                          <p className="onrightDate">{i.date}</p>

                                    </div>
                                    </div>
                                  )
                                }

                              })
                            }

                          </div>
                      </div>
                      <div className="past-events">
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
                                 <div>
                                  <div className="pa3 ma3" >
                                  <Link to="/eventdisplay/#project" onClick={(e)=>{setCarousel(i.image);}} >
                                     <img alt="" src={i.image[0]} className="gridImage pointer grow shadow-5" />
                                  </Link>
                                        <p className="onrightDate f3 b">{i.place}</p>

                                      <p className="onrightDate">{i.date}</p>

                                  </div>

                                  </div>

                                )

                              })
                            }

                          </div>
                      </div>
                  </div>
                  <div>
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
                                  <div className="mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" onClick={() => showMoreItems()}>Show More</div>
                                  <div className=" mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" onClick={() => showLessItems()}>Show Less</div>
                              </div>
                            )
                          }

                        })
                      }

                      </div>
                  </div>
              </div >


            )

          })
        }

      </div>

    )
}

export default Events;
