import React from 'react';
import { DiReact } from 'react-icons/di';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <div className="container cc">
                <div className="card ba fl w-20 br3 pa4">
                    <div className="image">
                        <h2>Event 1</h2>
                    </div>
                    <p className="details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus sapiente! Autem, magni cupiditate alias laudantium reiciendis deserunt ipsa tempora non. Tenetur adipisci ratione ut nostrum quos quas. Voluptatibus, quidem.
                    </p>
                    <button className="grow dib w-80 ba b--black-40 tc br3" href="#">Donate</button>
                    <div className="card-footer w-100">
                        <span className="supporters fl w-50">
                            <h4>100 supporters</h4>
                        </span>
                        <span className="learn-more fl w-50 tr">
                            <h4 className="">Learn More</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;