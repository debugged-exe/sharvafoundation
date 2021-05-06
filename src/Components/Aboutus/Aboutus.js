import React from 'react';
import './Aboutus.css';

function Aboutus(){
    return(
        <div className="aboutUs">
            <div className="mw5 mw7-ns center abc pa3 ph5-ns">
                <h2 className="center ">About Sharva</h2>
                <p className="lh-copy ">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                 The passage is attributed to an unknown typesetter in the 15th century<br />
                  who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                </p>
            </div>
            <div class="dt mw6 center pt0 pb5 pv5-m pv6-ns">
                <div class="db dtc-ns v-mid-ns">
                    <img src="http://tachyons.io/img/super-wide.jpg" alt="A bright blue sky" class="w-100 mw7 w5-ns" />
                </div>
                <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
                    <p class="lh-copy">
                    For desktop, this text is vertically aligned middle, no matter what the height of the image is.
                    On mobile, this is a paragraph below an image.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Aboutus;