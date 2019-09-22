import React from "react";
import "./Footer.css";
import Location from "./Location.png";
import Hours from "./Hours.png";
import Contact from "./Contact.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container1">
        {/* <h3>Location</h3> */}
        <img className="footer-image" src={Location} alt="logo" />
        <p className="footer-text">
          71 Chemin St-Francois-Xavier
          <br />
          Candiac, QC J5R4V4
        </p>
      </div>
      <div className="container1">
        {/* <h3>Hours</h3> */}
        <img className="footer-image" src={Hours} alt="logo" />
        <p className="footer-text">
          Tuesday - Friday | 11:30pm - 2pm <br />
          Tuesday, Wednesday, Sunday | 5pm - 8pm <br />
          Thursday, Friday, Saturday | 5pm - 9pm
        </p>
      </div>
      <div className="container1">
        {/* <h3>Contact</h3> */}
        <img className="footer-image" src={Contact} alt="logo" />
        <p className="footer-text">
          <a href="tel:+14506320559">450.632.0559</a> <br />
          sasasushi@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
