import React from "react";
import "../css/Footer.css"; // Import CSS file for styles

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-icons">
          <img src="menu.png" alt="" className="footer-icon" />
          <img src="home.png" alt="" className="footer-icon" />
        </div>
        <h1 className="footer-text">Emergency No.: 112</h1>
        <h1 className="footer-text">Garima Helpline: 1090</h1>
        <h1 className="footer-text">Ambulance: 108</h1>
        <h1 className="footer-text">Child Helpline: 1098</h1>
        <h1 className="footer-text">Cyber Helpline: 1930</h1>
        <h1 className="footer-text">State Centralized Call Centre no.: 181</h1>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Footer;
