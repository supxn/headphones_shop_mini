import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";
import { Product, CartProduct, CartProps } from '../types';
import { headphones, headphones2 } from '../projectdata/productdata'
import "../styles/App.css";

const Catalog: React.FC<CartProps> = ({ cartCounter, setCartCounter }) => {
    const addToCart = (product: CartProduct) => {
        const currentCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        const existingItem = currentCart.find((item: { id: number; }) => item.id === product.id);

        if (existingItem) {
            const updatedCart = currentCart.map((item: { id: number; quantity: number; }) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartCounter(cartCounter + 1);
        } else {
            const updatedCart = [...currentCart, product];
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartCounter(cartCounter + 1);
        }
    };
    const handleAddToCart = (product: Product) => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1

        });
    };
    return (
        <div className="catalog">
            <Header cartCounter={cartCounter} setCartCounter={setCartCounter} />
            <ProductList products={headphones} title={"Наушники"} onAddToCart={handleAddToCart} />
            <ProductList products={headphones2} title={"Беспроводные наушники"} onAddToCart={handleAddToCart} />
            <Footer />
        </div>
    );
};

export default Catalog;