import React, { useState } from 'react';
import pic4 from './4.jpeg';
import eventImage from './2.jpeg';
import './Events.css';

function Events({Initiative}) {



    const [showP, setShowPast] = useState(false)

    const pastEvents =
        <div className="grid">
            <div className="pa3 ma3" >
                <img src={Initiative.posts[6].past4} className="gridImage pointer grow shadow-5"/>
                <p className="onrightDate">{Initiative.posts[6].pastdate4}</p>
            </div>
            <div className="pa3 ma3">
                <img src={Initiative.posts[7].past5} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">{Initiative.posts[7].pastdate5}</p>
            </div>
            <div className="pa3 ma3">
                <img src={Initiative.posts[8].past6} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">{Initiative.posts[8].pastdate6}</p>
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
                            <img src={Initiative.posts[0].recent1} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[0].recentdate1}</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[1].recent2} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[1].recentdate2}</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[2].recent3} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[2].recentdate3}</p>
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
                            <img src={Initiative.posts[3].past1} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[3].pastdate1}</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[4].past2} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">{Initiative.posts[4].pastdate2}</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={Initiative.posts[5].past3} className="gridImage pointer grow shadow-5" />
                          <p className="onrightDate">{Initiative.posts[5].pastdate3}</p>
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
