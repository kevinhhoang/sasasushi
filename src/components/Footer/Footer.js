import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container1">
        <h3 className="footer-title">Location</h3>
        <p className="footer-text">
          71 Chemin St-Francois-Xavier
          <br />
          Candiac, QC J5R4V4
        </p>
      </div>
      <div className="container1">
        <h3 className="footer-title">Hours</h3>
        <p className="footer-text">
          Tuesday - Friday | 11:30pm - 2pm <br />
          Tuesday, Wednesday, Sunday | 5pm - 8pm <br />
          Thursday, Friday, Saturday | 5pm - 9pm
        </p>
      </div>
      <div className="container1">
        <h3 className="footer-title">Contact</h3>
        <p className="footer-text">
          <a href="tel:+14506320559">450.632.0559</a> <br />
          sasasushi@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
