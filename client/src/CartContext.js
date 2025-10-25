// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('maitri');

  const addToCart = item => setCart(prev => [...prev, item]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, user }}>
      {children}
    </CartContext.Provider>
  );
};