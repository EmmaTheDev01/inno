import React, { Component } from "react";
import "./index.css";
class Work extends Component {
  render() {
    return (
      <div id="work" className="portifolio-section">
        <div className="work-container">
          <h1 className="work-heading">Our recent work</h1>
          <p className="work-paragraph">Here is the showcase of our previous work and our portifolio.</p>
          <div className="portifolio-cards">
            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Westerwelle Startup Haus Kigali</p>
                <p className="work-description">
                  We have created an awesome platform that will help designers,
                  developers and companies create to create an interactive
                  virtual tours for their startups quickly and easily.
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>
              </div>
            </div>

            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Imbuga city walk</p>
                <p className="work-description">
                  Imbuga city walk is is a popular center in Kigali that relies primarily on walking or cycling for transport. 
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>

              </div>
            </div>

            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Ubumwe grande Hotel</p>
                <p className="work-description">
                 Our virtual tour at the Ubumwe grande Hotel shows guests charming and warm stay, with genuinely great services.
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>
              </div>
            </div>
            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Intare Conference arena</p>
                <p className="work-description">
                 Our virtual tour at Intare conference arena,. shows fully intergrated and secure complex which hosts events and other public affairs
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>
              </div>
            </div>

            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Gahanga Cricket stadium</p>
                <p className="work-description">
                  Our virtual tour at Gahanga Cricket Stadium (GCC), shows the beauty of the stadium and other great features within the compound.
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>
              </div>
            </div>

            <div className="portifolio-card">
              <div className="workcard-image">
                <img className="work-image" alt="card_image"></img>
              </div>
              <div className="card-body">
                <p className="title-work">Mythos Boutique Hotel</p>
                <p className="work-description">
                  This is a virtual tour at MYTHOS Boutique hotel that ensures hospitality and confort within the hotel.
                </p>
                <button className="btn-overlay hidden">Start tour</button>
                <div className="overlay hidden">
                    
                </div>
              </div>
            </div>
          </div>
          <a href="https://app.innorios.com">View More</a>
        </div>
      </div>
    );
  }
}
export default Work;
