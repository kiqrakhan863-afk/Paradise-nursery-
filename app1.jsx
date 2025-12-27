// App.jsx
import React from "react";
import "./App.css";

const App = () => {
  const handleGetStarted = () => {
    // Replace with actual navigation or action
    alert("Welcome to Paradise Nursery! Start exploring our plants.");
  };

  return (
    <div className="App">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for healthy plants and gardening supplies</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;