import React from 'react';
import './style/Home.css';
import themeParkImage from './theme-park-image.jpeg'; 

function Home() {
  return (
    <div className="front-page-container">

      <div className="image-section">
        <img src={themeParkImage} alt="Theme Park" />
      </div>

      <div className="main-content">

        <div className="promotions">
          <h2>About</h2>
          <div className="promotions-list">
            <div>Summer Special: 20% off on Family Tickets!</div>
            <div>Group Discount: 10% off for groups of 10 or more!</div>
          </div>
          <div className="park-hours">
          <h2>Park Hours</h2>
          <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 10:00 PM</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
