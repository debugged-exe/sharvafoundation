import React, { useState } from 'react';
import pic4 from './4.jpeg';
import {giveherwings,giveherwingspics} from "../../Database/giveherwings";
import {strivewithpride,strivewithpridepics} from "../../Database/strivewithpride";
import {projectruya,projectruyapics} from "../../Database/projectruya";
import {hungerfreeindia,hungerfreeindiapics} from "../../Database/hungerfreeindia";
import {asfreeasabird,asfreeasabirdpics} from "../../Database/asfreeasabird";
import eventImage from './2.jpeg';
import './Events.css';

function Events({event,pics}) {

    const [showP, setShowPast] = useState(false)

    const pastEvents =
        <div className="grid">
            <div className="pa3 ma3" >
                <img src={pic4} className="gridImage pointer grow shadow-5"/>
                <p className="onrightDate">22 May,2021</p>
            </div>
            <div className="pa3 ma3">
                <img src={pic4} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">22 May,2021</p>
            </div>
            <div className="pa3 ma3">
                <img src={pic4} className="gridImage pointer grow shadow-5" />
                <p className="onrightDate">22 May,2021</p>
            </div>
        </div>

    return (
        <div className="events-1 ba">
            {/* The 100% width image */}
            <div className="events-top-image">
                <h3 className="events-tagline">#HungerFreeIndia</h3>

            </div>

            {/* 50% text and 50% image responsive div */}
            <div className="event-txt-img">
                <div className="event-txt">
                    <h1>Event Text Image</h1>
                    <p style={{ textAlign: "left" }}>Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the <br />
                    15th century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a
                    type specimen book. <br />
                    Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the <br />
                    15th century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a
                    type specimen book. <br />

                    </p>
                </div>
                <div className="event-img">
                    <img src={eventImage} className="image" />
                </div>
            </div>

            <div className="past-recent-events">

                <div className="recent-events">
                    <div className="heading">
                        <h1>RECENT EVENTS</h1>
                        <hr id="recent-hr" />
                    </div>
                    {/* Recent Events grid */}
                    <div className="grid">
                        <div className="pa3 ma3" >
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">22 May,2021</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">22 May,2021</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">22 May,2021</p>
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
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">22 May,2021</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                            <p className="onrightDate">22 May,2021</p>
                        </div>
                        <div className="pa3 ma3">
                            <img src={pic4} className="gridImage pointer grow shadow-5" />
                          <p className="onrightDate">22 May,2021</p>
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
