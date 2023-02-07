import React, { Component } from "react";
import "./index.css";
import about from './Images/about.jpg'
class About extends Component {
  render() {
    return (
      <div id="about" className="about-section">
        <div className="grid-section">
          <div className="text-about">
            <h1 className="about-heading">About Us</h1>
            <p className="paragraph">
              Innorios is a virtual reality SaaS platform that empowers business
              of different sectors to create virtual experiences of their
              services or products.
            </p>
            <p className="paragraph">
              Our software is built for entrepreneurs, photographers and real
              estate agents, brokers, car dealers, RV dealers, manufacturers,
              trainers and sales teams. We empower them to create world class
              360º/VR virtual tours quickly, market at a high level and keep
              their brand on the front of the tour with free hustles of hosting
              and software with Private Label / White Label by Adding or
              Embedding and Publish 360º Virtual Tours Directly To their Website
              or Blog and Present 360º Tours In A Virtual Reality Headset,
              mobile, tablet and PCs.
            </p>
            <p className="paragraph">
              We are bring this emerging technology to support industries like
              Tourism, Commerce, Education, Agriculture, Entertainment, Health
              etc
            </p>
          </div>
          <div className="image-about">
            <img src={about} alt="about-image" height='630px' width='550px'></img>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
