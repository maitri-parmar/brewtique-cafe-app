import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../CartContext';
import './Menu.css';

const Menu = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const renderCategory = (title, filterFn) => (
    <>
      <h3 className="category-title">{title}</h3>
      <div className="menu-grid">
        {items.filter(filterFn).map(item => (
          <div key={item.id} className="menu-card">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button className='btn' onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="menu-heading">🍽️ Brewtique Menu</h2>
        {renderCategory('☕ Coffee', item => item.category === 'coffee')}
        {renderCategory('❄️ Cold Coffee', item => item.category === 'cold-coffee')}
        {renderCategory('🍵 Tea & Non-Coffee', item => item.category === 'tea')}
        {renderCategory('🌟 Specialty Drinks', item => item.category === 'specialty')}
        {renderCategory('🍪 Bakery & Snacks', item => item.category === 'snacks')}
      </div>
      <Footer />
    </>
  );
};

export default Menu;