import React from 'react';
import possibilityImage from '../../assets/schedule2.webp';
import './possibility.css'; // Ensure this file is correctly named and located

const Possibility = () => (
  <div className="nix__possibility section__padding" id="possibility">
    <div className="nix__possibility-image">
      <img src={possibilityImage} alt="schedule2" />
    </div>
    <div className="nix__possibility-content">
      <h4>Embrace the Journey to Self-Improvement</h4>
      <h1 className="gradient__text">Unlock Your Potential <br /> With Nix</h1>
      <p>Embark on a path of self-discovery and improvement with our app. Let Nix guide you through setting realistic goals, improving daily habits, and unlocking the full potential of every day.</p>
      <h4>Join Us Now for Early Access</h4>
    </div>
  </div>
);

export default Possibility;
