import React from 'react'
import './header.css';
import schedule from '../../assets/schedule.png'

const Header = () => (
  <div className="nix__header section__padding" id="home">
  <div className="nix__header-content">
    <h1 className="gradient__text">Empower Your Time, Transform Your Life</h1>
    <p>Discover the power of effective time management and unlock your potential for personal growth and productivity. Let's journey together towards self-improvement, setting goals, and achieving them with precision. Start planning your success story today.</p>

    <div className="nix__header-content__input">
      <input type="email" placeholder="Your Email Address" />
      <button type="button">Get Started</button>
    </div>
  </div>

    <div className="nix__header-image">
      <img src={schedule} alt="Schedule" />
    </div>
  </div>
);

export default Header;
