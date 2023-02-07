import React from "react";
import "./index.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h1 className="footer-heading">Innorios</h1>
          <p className="footer-text">
            Innorios is a virtual reality SaaS platform that empowers business
            of different sectors to create virtual experiences of their services
            or products. Our software is built for entrepreneurs, photographers
            and real estate agents, brokers, car dealers, RV dealers,
            manufacturers, trainers and sales teams.
          </p>
          <div className="icons">
            <span className="icon ig"><FaInstagram/></span>
            <span className="icon in"><FaLinkedin/></span>
            <span className="icon tw"><FaTwitter/></span>
            <span className="icon fa"><FaFacebook/></span>
          </div>
        </div>
        <div className="footer-menu">
          <h2 className="footer-heading">Our Menu</h2>
          <ul className="footer-text">
            <li className="footer-menu">About Us</li>
            <li className="footer-menu">Services</li>
            <li className="footer-menu">Our work</li>
            <li className="footer-menu">Contact Us</li>
          </ul>
        </div>
        <div className="resources">
          <h2 className="footer-heading">Find Us</h2>
          <ul className="footer-text">
            <li className="footer-menu">+250785555</li>
            <li className="footer-menu">info@innorios.com</li>
            <li className="footer-menu">Kigali - Rwanda</li>
            <li className="footer-menu">RN 5 Rd, Kigali</li>
          </ul>
        </div>
        <div className="app">
          <h2 className="footer-heading">App</h2>
          <p className="footer-text">
          Our app
          </p>
        </div>
      </div>
      <div className="copyright-container">
          <p className="copyright">&copy;2023 <b>Innorios.</b> All rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
