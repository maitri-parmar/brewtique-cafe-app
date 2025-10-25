import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h2>Welcome to Brewtique Cafe Manager</h2>
      <p>Manage your menu, track orders, and serve joy ☕</p>
      <img
        src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
        alt="Cafe vibe"
        className="home-img"
      />
    </div>
    <Footer />
  </>
);

export default Home;