import React, { useState } from 'react';
import pic1 from './1.jpeg';
import pic2 from './2.jpeg';
import pic3 from './3.jpeg';
import pic4 from './4.jpeg';
import eventImage from './2.jpeg';
import Modal from 'react-modal';

import Carousel from 'react-elastic-carousel';
import './Events.css';

function Events({Initiative}) {

    const [showP, setShowPast] = useState(false);
    const[recentA,setrecentA]=useState(false);
    const[recentB,setrecentB]=useState(false);
    const[recentC,setrecentC]=useState(false);
    const[pastA,setpastA]=useState(false);
    const[pastB,setpastB]=useState(false);
    const[pastC,setpastC]=useState(false);
    const[pastD,setpastD]=useState(false);
    const[pastE,setpastE]=useState(false);
    const[pastF,setpastF]=useState(false);

    const pastEvents =
        <div className="grid">
            <div className="pa3 ma3" >
                <img src={Initiative.posts[6].past4} onClick={()=>setpastD(true)} className="gridImage pointer grow shadow-5"/>
                <p className="onrightDate">{Initiative.posts[6].pastdate4}</p>
                <Modal isOpen={pastD} onRequestClose={()=>setpastD(false)} >
                <span className="modalcloseButton" onClick={()=>setpastD(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[6].pastD1}></img>
                                   <img src={Initiative.modalpics[6].pastD2}></img>
                                   <img src={Initiative.modalpics[6].pastD3}></img>
                                   <img src={Initiative.modalpics[6].pastD4}></img>
                                </Carousel>
                            </Modal>
            </div>
            <div className="pa3 ma3">
                <img src={Initiative.posts[7].past5} onClick={()=>setpastE(true)} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">{Initiative.posts[7].pastdate5}</p>
                <Modal isOpen={pastE} onRequestClose={()=>setpastE(false)}>
                <span className="modalcloseButton" onClick={()=>setpastE(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[7].pastE1}></img>
                                   <img src={Initiative.modalpics[7].pastE2}></img>
                                   <img src={Initiative.modalpics[7].pastE3}></img>
                                   <img src={Initiative.modalpics[7].pastE4}></img>
                                </Carousel>
                            </Modal>
            </div>
            <div className="pa3 ma3">
                <img src={Initiative.posts[8].past6} onClick={()=>setpastF(true)} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">{Initiative.posts[8].pastdate6}</p>
                <Modal isOpen={pastF} onRequestClose={()=>setpastF(false)}>
                <span className="modalcloseButton" onClick={()=>setpastF(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[8].pastF1}></img>
                                   <img src={Initiative.modalpics[8].pastF2}></img>
                                   <img src={Initiative.modalpics[8].pastF3}></img>
                                   <img src={Initiative.modalpics[8].pastF4}></img>
                                </Carousel>
                            </Modal>
            </div>
        </div>
console.log(Initiative);
    return (
        <div className="events-1 ba">
            {/* The 100% width image */}
            <div className="events-top-image">
                <h3 className="events-tagline">{Initiative.description.tagline}</h3>
                <a href="#event-img">
                <div className="eventscrollDown pointer"><a href="#"></a>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </a>
            </div>


            {/* 50% text and 50% image responsive div */}
            <div className="event-txt-img">
                <div className="event-txt">
                    <h1>{Initiative.description.tagline}</h1>
                    <p style={{ textAlign: "left" }}>
                        {Initiative.description.text1}<br />
                        {Initiative.description.text2}
                    </p>
                </div>
                <div id="event-img" >
                    <img src={Initiative.description.img} className="image" />
                </div>
            </div>

            <div className="past-recent-events" >

                <div className="recent-events">
                    <div className="heading">
                        <h1>RECENT EVENTS</h1>
                        <hr id="recent-hr" />
                    </div>
                    {/* Recent Events grid */}
                    <div className="grid">
                        <div className="pa3 ma3" >
                            <img src={Initiative.posts[0].recent1} onClick={()=>setrecentA(true)} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[0].recentdate1}</p>
                            <Modal isOpen={recentA} onRequestClose={() => setrecentA(false)}>
                            <span className="modalcloseButton" onClick={()=>setrecentA(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[0].recentA1}></img>
                                   <img src={Initiative.modalpics[0].recentA2}></img>
                                   <img src={Initiative.modalpics[0].recentA3}></img>
                                   <img src={Initiative.modalpics[0].recentA4}></img>
                                </Carousel>
                            </Modal>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[1].recent2} onClick={()=>setrecentB(true)} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[1].recentdate2}</p>
                            <Modal isOpen={recentB}  onRequestClose={()=>setrecentB(false)}>
                            <span className="modalcloseButton" onClick={()=>setrecentB(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[1].recentB1}></img>
                                   <img src={Initiative.modalpics[1].recentB2}></img>
                                   <img src={Initiative.modalpics[1].recentB3}></img>
                                   <img src={Initiative.modalpics[1].recentB4}></img>
                                </Carousel>
                            </Modal>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[2].recent3} onClick={()=>setrecentC(true)} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[2].recentdate3}</p>
                            <Modal isOpen={recentC} onRequestClose={()=>setrecentC(false)}>
                            <span className="modalcloseButton" onClick={()=>setrecentC(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[2].recentC1}></img>
                                   <img src={Initiative.modalpics[2].recentC2}></img>
                                   <img src={Initiative.modalpics[2].recentC3}></img>
                                   <img src={Initiative.modalpics[2].recentC4}></img>
                                </Carousel>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="past-events">
                    <div className="heading">
                        <h1>PAST EVENTS</h1>
                        <hr id="past-hr" />
                    </div>
                    {/* Past Events grid */}
                    <div className="grid">
                        <div className="pa3 ma3" >
                            <img src={Initiative.posts[3].past1} onClick={()=>setpastA(true)} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[3].pastdate1}</p>
                            <Modal isOpen={pastA} onRequestClose={()=>setpastA(false)}>
                            <span className="modalcloseButton" onClick={()=>setpastA(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[3].pastA1}></img>
                                   <img src={Initiative.modalpics[3].pastA2}></img>
                                   <img src={Initiative.modalpics[3].pastA3}></img>
                                   <img src={Initiative.modalpics[3].pastA4}></img>
                                </Carousel>
                            </Modal>
                        </div>
                        <div className="pa3 ma3" >
                            <img src={Initiative.posts[4].past2} onClick={()=>setpastB(true)} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[4].pastdate2}</p>
                            <Modal isOpen={pastB} onRequestClose={()=>setpastB(false)}>
                            <span className="modalcloseButton" onClick={()=>setpastB(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[4].pastB1}></img>
                                   <img src={Initiative.modalpics[4].pastB2}></img>
                                   <img src={Initiative.modalpics[4].pastB3}></img>
                                   <img src={Initiative.modalpics[4].pastB4}></img>
                                </Carousel>s
                            </Modal>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[5].past3} onClick={()=>setpastC(true)} className="gridImage pointer grow shadow-5" />
                          <p className="onrightDate">{Initiative.posts[5].pastdate3}</p>
                          <Modal isOpen={pastC} onRequestClose={()=>setpastC(false)}>
                          <span className="modalcloseButton" onClick={()=>setpastC(false)}>X</span>
                                <Carousel itemstoShow={4} style={{height:"500px",objectFit:"cover"}}>
                                   <img src={Initiative.modalpics[5].pastC1}></img>
                                   <img src={Initiative.modalpics[5].pastC2}></img>
                                   <img src={Initiative.modalpics[5].pastC3}></img>
                                   <img src={Initiative.modalpics[5].pastC4}></img>
                                </Carousel>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div>
                    {
                        showP ? pastEvents : null
                    }
                    <div className="showButtons mt2 mb2 flex justify-center">
                        <div className="mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" onClick={() => setShowPast(true)}>Show More</div>
                        <div className=" mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" onClick={() => setShowPast(false)}>Show Less</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Events;
