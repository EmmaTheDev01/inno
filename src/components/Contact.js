import React, { Component } from "react";
import "./index.css";
class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-section">
      <h1 className="contactsection-title"> Need Help? Say Hello</h1>
        <p className="contactsection-paragraph">
          Feel free to tell us what you think, we will be able to respond ASAP!
        </p>
        <div className="contact-container">
          <div className="contact-left">
            <p className="title-detail">Our Location</p>
            <p className="contact-detail">
              RN 5 Rd, Kigali Rwanda, ICT Innovation Center
            </p>
            <p className="title-detail">Contact Phones</p>
            <p className="contact-detail">+25078888888</p>
            <p className="contact-detail">+25078888888</p>
            <p className="title-detail">Working Hours</p>
            <p className="contact-detail">Mon - Fri, 8:30am - 7:30pm</p>
            <p className="contact-detail">Sun, 8:30am - 2:30pm</p>
            <p className="title-detail">Contact Email</p>
            <p className="contact-detail">info@innorios.com</p>
          </div>
          <div className="contact-right">
          <form>
            <input type="text" className="input name" placeholder="Your Name"></input>
            <input type="text" className="input email" placeholder="Email Address"></input>
            <input type="text" className="input phone" placeholder="Your Phone"></input>
            <textarea  className="input message" placeholder="Your Message"></textarea>
            <input
              type="submit"
              className="contact-btn"
              value="Send Message"
            ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
