import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import Carousel from 'react-elastic-carousel';
import './Events.css';


function Events({initiative}) {

  const [drive,setDrive]=useState([]);
  var abc=[];
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
    const[caro,setCaro]=useState([]);

    console.log(visible);


    return (
      <div>
        {
          drive.map((item,index)=>{
            return(
              <div className="events-1 ba">
                  {/* The 100% width image */}
                  <div className="events-top-image" style={{background:`url(${item.bgimg}) no-repeat center center`,backgroundSize:'cover'}}>
                      <h3 className="events-tagline">{item.tagline}</h3>
                      <a href="#event-img">
                      <div className="eventscrollDown pointer"><a href="#"></a>
                              <span></span>
                              <span></span>
                              <span></span>
                      </div>
                  </a>
                  </div>


                  {/* 50% text and 50% image responsive div */}
                  <div className="event-txt-img w-100">
                      <div className="event-txt w-100">
                          <h1>{item.tagline}</h1>
                          <p style={{ textAlign: "left" }}>
                            {item.description}
                          </p>
                      </div>
                      <div id="event-img" >
                          <img src={item.imgright}  className="image" />
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
                                        <img src={i.image[0]} onClick={(e)=>{setrecentA(true);setCaro(i.image);}} className="gridImage pointer grow shadow-5" />
                                          <p className="onrightDate">{i.place}</p>
                                        <p className="onrightDate">{i.date}</p>
                                        <Modal isOpen={recentA}  onRequestClose={() => setrecentA(false)} style={{content:{background:"#ddd"}}}>
                                        <span className="modalcloseButton" onClick={()=>setrecentA(false)}>X</span>
                                            <Carousel itemstoShow={4}>
                                              {
                                                caro.map((photo,index)=>{
                                                  return(
                                                    <img src={photo} style={{objectFit:"fill"}}></img>
                                                  )
                                                })
                                              }

                                            </Carousel>
                                        </Modal>
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
                              item.events.filter(i=>i.recent==='0').slice(0,visible).map((i,index)=>{

                                return(
                                 <div>
                                  <div className="pa3 ma3" >
                                      <img src={i.image[0]} onClick={()=>{setrecentA(true);setCaro(i.image);}} className="gridImage pointer grow shadow-5" />
                                        <p className="onrightDate">{i.place}</p>

                                      <p className="onrightDate">{i.date}</p>
                                      <Modal isOpen={recentA} onRequestClose={() => setrecentA(false)}>
                                      <span className="modalcloseButton" onClick={()=>setrecentA(false)}>X</span>
                                          <Carousel itemstoShow={4} style={{height:"80vh"}}>
                                            {
                                              caro.map((photo,index)=>{
                                                return(
                                                  <img src={photo} style={{height:"400px",width:"100%",objectFit:"fill"}}></img>
                                                )
                                              })
                                            }
                                          </Carousel>
                                      </Modal>
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
