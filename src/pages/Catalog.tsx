import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { Product, CartProduct } from '../types';
import {headphones, headphones2} from '../projectdata/productdata'
import "../styles/App.css";
export interface CatalogProps {
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
}
const Catalog = ({ cartCounter, setCartCounter }: CatalogProps) => {
    const addToCart = (product: CartProduct) => {
        const currentCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        const existingItem = currentCart.find((item: { id: number; }) => item.id === product.id);

        if (existingItem) {
            const updatedCart = currentCart.map((item: { id: number; quantity: number; }) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartCounter(cartCounter + 1);
        } else {
            const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.img,
                quantity: 1
            };
            const updatedCart = [...currentCart, newItem];
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
        });
    };
    return (
        <div className="catalog">
            <Header cartCounter={cartCounter} />
            <ProductList products={headphones} title={"Наушники"} onAddToCart={handleAddToCart} />
            <ProductList products={headphones2} title={"Беспроводные наушники"} onAddToCart={handleAddToCart} />
            <Footer />
        </div>
    );
};

export default Catalog;