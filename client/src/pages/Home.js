import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import CCarousel from '../components/CCarousel';


const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h2>Welcome to Brewtique Cafe Manager</h2>
      <p>☕Manage your menu, track orders, and serve joy ☕</p>
      <CCarousel />
    </div>
    <Footer />
  </div>
);

export default Home;