import React, { useState } from 'react';
import './Events.css';
import pic1 from './1.jpeg';
import pic2 from './2.jpeg';
import pic3 from './3.jpeg';
import pic4 from './4.jpeg';
import pic5 from './5.jpeg';
import pic6 from './6.jpeg';
import pic7 from './7.jpeg';
import pic11 from './11.jpeg';
import pic12 from './12.jpeg';
import pic13 from './13.jpeg';
import { FaChevronCircleDown } from 'react-icons/fa';

function Events() {

    const [showP, setShowPast] = useState(false)

    const pastEvents =
        <div className="ph5 w-100  flex justify-around">
            <div className="pa3 mb4 mr4" >
                <img src={pic11} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3 mb4 mr4">
                <img src={pic12} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3  mb4 mr4">
                <img src={pic13} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
        </div>


    return (
        <div className="" >
            <div className="pa2">
                <img src={pic4} className="event-image" style={{ width: "100%", height: "500px" }} />
            </div>
            <div className="event-text mb3" style={{ maxHeight: "20vh" }}>
                <div className="fl event-text-image pa2" style={{ textAlign: "center" }}>
                    <h1>Heading</h1>
                    <p style={{ textAlign: "left" }}>Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the
                    15th century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a
                    type specimen book. <br />
                    Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the
                    15th century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a
                    type specimen book. <br />
                        <FaChevronCircleDown />
                    </p>
                </div>
                <div className="fl event-text-image pa3" id="image">
                    <img src={pic2} />
                </div>
            </div>


            <div className="image-grid" >
                <div className="pv0 ph5">
                    <div className="event-heading" style={{ textAlign: "left", margin: "1rem", display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center" }}>
                        <h2 style={{ fontSize: "2rem", padding: "1rem" }}>RECENT EVENTS</h2>
                        <hr style={{ border: "1px solid orange", flex: "1", height: "2px", backgroundColor: "orange" }} />
                    </div>
                    <div className="w-100 flex justify-around">
                        <div className="pa3 mb4 mr4" >
                            <img src={pic11} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                        <div className="pa3 mb4 mr4">
                            <img src={pic12} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                        <div className="pa3  mb4 mr4">
                            <img src={pic13} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pv0 ph5">
                <div style={{ textAlign: "left", margin: "1rem", display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ fontSize: "2rem", padding: "1rem" }}>PAST EVENTS</h2>
                    <hr style={{ border: "1px solid orange", flex: "1", height: "2px", backgroundColor: "orange" }} />
                </div>
                <div className="level-one">
                    <div className="w-100  flex justify-around">
                        <div className="pa3 mb4 mr4" >
                            <img src={pic4} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                        <div className="pa3 mb4 mr4">
                            <img src={pic5} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                        <div className="pa3  mb4 mr4">
                            <img src={pic6} alt="gridImage" style={{ borderRadius: "8px", height: "220px", width: "320px", objectFit: "cover" }} />
                            <p>22 May,2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="show-more justify-center">
                {
                    showP ? pastEvents : null
                }
                <button onClick={() => setShowPast(true)}>Show More</button>
                <button onClick={() => setShowPast(false)}>Show Less</button>
            </div>
        </div >
    )
}

export default Events;