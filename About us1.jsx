// AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Optional: if you want to style this component

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      
      <p>
        Welcome to <strong>Paradise Nursery</strong>! We are passionate about bringing the beauty of nature into your homes and workplaces. Our mission is to provide high-quality plants and gardening supplies that help you create a green and healthy environment.
      </p>

      <p>
        Founded in 2015, we have grown from a small local nursery to a trusted plant supplier with customers across the region. We pride ourselves on our exceptional customer service, expert knowledge, and eco-friendly practices.
      </p>

      <p>
        At Paradise Nursery, we believe that everyone should have the joy of nurturing plants. Whether you're a beginner or a seasoned gardener, we have something for everyone.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>Quality: Only the healthiest plants and premium products.</li>
        <li>Sustainability: Eco-friendly and responsible practices.</li>
        <li>Customer Care: Supporting you at every step of your gardening journey.</li>
        <li>Community: Building a community of plant lovers and enthusiasts.</li>
      </ul>

      <p>
        Join us in making the world a greener place, one plant at a time!
      </p>
    </div>
  );
};

export default AboutUs;