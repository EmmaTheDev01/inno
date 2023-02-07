import React from "react";
import "./topbar.css";
function TopBar() {
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <ul className="menu-topbar">
            <li className="menu">
              <h3>Innorios</h3>
            </li>

            <li className="nav-menu">
              <button className="btn-nav">Work with us</button>
            </li>
            <li className="nav-menu">Our work</li>
            <li className="nav-menu">Services</li>
            <li className="nav-menu">About us</li>
            <li className="nav-menu">Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
