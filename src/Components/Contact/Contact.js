import React from 'react';
import './Contact.css';
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {ImLocation} from "react-icons/im";




function Contact(){
  return(
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.872948638045!2d73.87827994990795!3d18.534642687339023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f855581855%3A0x9bfc35605df36ec5!2sModern%20Education%20Society&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1620808743519!5m2!1sen!2sin" style={{ width:"100%" ,height:"50vh", border:0, allowfullscreen:"",loading:"lazy"}}></iframe>

      <section className="contact">

        <div className="content">
          <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
             <div className="icon"><FaPhoneAlt /></div>
           <div className="text">
             <h3>Ankita Zadoo</h3>
           <p>1234567890</p>
           </div>
            </div>
            <div className="box">
             <div className="icon"><FaPhoneAlt/></div>
           <div className="text">
             <h3>Tanmay Jagtap</h3>
           <p>1234567890</p>
           </div>
            </div>
            <div className="box">
             <div className="icon"><FaPhoneAlt />
             </div>
           <div className="text">
             <h3>ABCDEFG</h3>
           <p>1234567890</p>
           </div>
            </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required"></input>
                <span> Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required"></input>
            <span> Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
            <span> Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send"></input>
            </div>
            </form>
          </div>
        </div>
      </section>
      </div>




  );
}


export default Contact;
