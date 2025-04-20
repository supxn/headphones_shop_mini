import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CartList } from "../components/CartList/CartList";
import "../styles/App.css";
import { CartProps } from '../types'

export const Cart: React.FC<CartProps> = ({ cartCounter, setCartCounter }) => {
  return (
    <div className="cart">
      <Header cartCounter={cartCounter} setCartCounter={setCartCounter} />
      <h1 className='product-list-title'>Корзина</h1>
      <CartList cartCounter={cartCounter}
        setCartCounter={setCartCounter} />
      <Footer />

    </div>
  );
};
