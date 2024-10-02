import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Hex</h1>
        <p>Your hub for buying, selling, and customizing avatars!</p>
      </header>
      
      <section className="action-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
      </section>
      
      <section className="featured-items">
        <h2>Featured Items</h2>
        <div className="items-grid">
          <div className="item-card">
            <img src="https://via.placeholder.com/150" alt="Item 1"/>
            <p>Item 1</p>
          </div>
          <div className="item-card">
            <img src="https://via.placeholder.com/150" alt="Item 2"/>
            <p>Item 2</p>
          </div>
          <div className="item-card">
            <img src="https://via.placeholder.com/150" alt="Item 3"/>
            <p>Item 3</p>
          </div>
        </div>
      </section>
      
      <footer className="homepage-footer">
        <p>© 2024 Hex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
