import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'; // Ensure the CSS is properly updated to reflect the new class names

const Blog = () => (
  <div className="nix__blog section__padding" id="blog">
    <div className="nix__blog-heading">
      <h1 className="gradient__text">Discover the Latest in Productivity & Self-Improvement</h1>
    </div>
    <div className="nix__blog-container">
      <div className="nix__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Maximizing Your Day with Effective Time Management Strategies" />
      </div>
      <div className="nix__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="The Science of Habit Formation and Its Impact on Daily Productivity" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Leveraging Technology for Better Work-Life Balance" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="The Role of Mindfulness in Enhancing Personal Efficiency" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Exploring Innovative Time Management Tools and Techniques" />
      </div>
    </div>
  </div>
);

export default Blog;
