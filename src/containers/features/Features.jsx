import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Maximize Your Day',
    text: 'Unlock the potential of each day with tailored scheduling designed to empower your productivity and foster personal growth.',
  },
  {
    title: 'Streamline Your Goals',
    text: 'Visualize your ambitions and break them down into actionable steps. Our app helps you keep focus on achieving your long-term goals with daily reminders and progress tracking.',
  },
  {
    title: 'Enhance Your Focus',
    text: 'Eliminate distractions and enhance your focus with techniques and tools crafted to boost your concentration and efficiency.',
  },
  {
    title: 'Transform Your Habits',
    text: 'Identify, track, and transform your habits with our analytics tools. Make lasting changes that propel you towards your personal and professional aspirations.',
  },
];

const Features = () => (
  <div className="nix__features section__padding" id="features">
    <div className="nix__features-heading">
      <h1 className="gradient__text">Elevate Your Productivity & Well-being. Embrace the Art of Time Management.</h1>
      <p>Join the movement towards self-improvement and effective time management. Get started today.</p>
    </div>
    <div className="nix__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
