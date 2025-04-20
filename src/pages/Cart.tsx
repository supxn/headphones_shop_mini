import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";
import "../styles/App.css";
export interface CartProps {
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
  }
  const Cart = ({ cartCounter, setCartCounter }: CartProps) => {
  return (
    <div className="cart">
     <Header cartCounter={cartCounter}/>
     <h1 className='product-list-title'>Корзина</h1>
     <CartList cartCounter={cartCounter}
          setCartCounter={setCartCounter}/>
     <Footer/>

    </div>
  );
};

export default Cart;