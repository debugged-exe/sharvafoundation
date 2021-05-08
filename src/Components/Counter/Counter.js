import React from 'react';
import './Counter.css';
import { DiReact } from 'react-icons/di';

function Counter() {
    return (
        <div class="cc">
            <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
                <DiReact className="w-50" size="5em" />
                <h3 className="tc">100</h3>
                <h3 className="details tc">Number of participents</h3>
            </div>
            <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
                <DiReact className="w-50" size="5em" />
                <h3 className="tc">200</h3>
                <h3 className="details tc">Number of participents</h3>
            </div>
            <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
                <DiReact className="w-50" size="5em" />
                <h3 className="tc">300</h3>
                <h3 className="details tc">Number of participents</h3>
            </div>
            <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
                <DiReact className="w-50" size="5em" />
                <h3 className="tc">400</h3>
                <h3 className="details tc">Number of participents</h3>
            </div>
            <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
                <DiReact className="w-50" size="5em" />
                <h3 className="tc">500</h3>
                <h3 className="details tc">Number of participents</h3>
            </div>
        </div>
    )
}

export default Counter;