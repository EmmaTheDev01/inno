import React, { Component } from "react";
import { Link } from "react-router-dom";
class Services extends Component {
  render() {
    return (
      <>
        <div id='services' className="services-section">
          <div className="cards">
            <div className="card">
              <div className="card-image">
                <img className="image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-service">VR Tour</p>
                <p className="service-description">We have created an awesome platform that will help designers, developers and companies create to create an interactive virtual tours for their startups quickly and easily.</p>
                <p className="service-link">Learn More</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img className="image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-service">Hosting</p>
                <p className="service-description">We have developed a Robust Software Solution to Empower our clients with Private Labels / White Labels by Adding or Embedding and Publish 360º Virtual Tours Directly To their Website or Blog and Present 360º Tours In A Virtual Reality Headset, mobile, tablet, and PCs.</p>
                <p className="service-link">Learn More</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img className="image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-service">Consultancy</p>
                <p className="service-description">We help you to get the best business model which can help your business to grow effectively. We are partners with your business by helping you in all ways like deploying the best effective marking strategies.</p>
                <p className="service-link">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Services;
