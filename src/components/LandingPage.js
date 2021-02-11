import React, { Component } from "react";
import { Link } from "react-router-dom";

const landingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1> Shop Instantly</h1>
        <p>Shop the items you need, faster and easier..</p>
        <Link to="/home" className="btn btn-danger">
          Start Shopping
        </Link>
      </div>

      <div className="landing-page-container">
        <h1>Our Product Catogories</h1>
        <p>We sell varieties of items in our site. Pick the items you like. </p>
        <div className="landing-page-grid">
          <img src="../Images/clothes.jpg" alt="clothes" />
          <img src="../Images/computer.jpg" alt="computer" />
          <img src="../Images/phone.jpg" alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default landingPage;
