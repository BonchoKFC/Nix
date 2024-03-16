import React from 'react'
import './whatNix.css';
import Feature from '../../components/feature/Feature';

const WhatNix = () => (
  <div className="nix__whatnix section__margin" id="whatNix">
    <div className="nix__whatnix-feature">
      <Feature title="Why Nix?" text="Dive into the heart of productivity and discover how Nix transforms your daily hustle into a balanced, goal-oriented routine. Embrace the art of managing time efficiently, turning aspirations into daily actions." />
    </div>
    <div className="nix__whatnix-heading">
      <h1 className="gradient__text">Empower Your Days</h1>
      <p>Uncover the Features</p>
    </div>
    <div className="nix__whatnix-container">
      <Feature title="Personalized Planning" text="Tailor your time with personalized schedules that fit your lifestyle and ambitions. Nix provides the tools to plan your day effectively, ensuring every moment counts." />
      <Feature title="Goal-Oriented Tasks" text="Set, track, and achieve your goals with Nix's intuitive task management system. Break down your long-term objectives into manageable daily tasks that propel you forward." />
      <Feature title="Self-Improvement Insights" text="Gain insights into your productivity patterns. Nix's analytics help you understand how you spend your time and identify opportunities for growth and improvement." />
    </div>
  </div>
);

export default WhatNix;
