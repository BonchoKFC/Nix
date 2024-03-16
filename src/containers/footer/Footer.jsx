import React from 'react';
import appLogo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => (
  <div className="nix__footer section__padding">
    <div className="nix__footer-heading">
      <h1 className="gradient__text">Are You Ready to Enhance Your Productivity?</h1>
    </div>

    <div className="nix__footer-btn">
      <p>Join Us Now</p>
    </div>

    <div className="nix__footer-links">
      <div className="nix__footer-links_logo">
        <img src={appLogo} alt="app_logo" />
        <p>Your Company Name<br /> All Rights Reserved</p>
      </div>
      <div className="nix__footer-links_div">
        <h4>Explore</h4>
        <p>About Us</p>
        <p>Our Services</p>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div className="nix__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
      </div>
      <div className="nix__footer-links_div">
        <h4>Contact</h4>
        <p>Your Company Address</p>
        <p>Your Phone Number</p>
        <p>your.email@example.com</p>
      </div>
    </div>

    <div className="nix__footer-copyright">
      <p>@2024 Your Company. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
