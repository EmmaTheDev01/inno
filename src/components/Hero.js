import React, { Component } from "react";
import './index.css';
import VR from './Images/VR.png';
class Hero extends Component{
    render(){
        return(
        <div className="Homepage-content">
            <div className="hero">
                <div className="left">
                    <h1 className="hero-header">Start Your virtual tour with us</h1>
                    <p className="hero-text">Walk through multiple doors on your device.
                    Enjoy virtual reality experience in Rwanda.</p>
                    <button className="btn-learnmore">Learn More</button>
                </div>
                <div className="right">
                    <div className="circle">
                        
                        <img className="hero-image" src={VR} alt="VR headset"></img>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Hero;