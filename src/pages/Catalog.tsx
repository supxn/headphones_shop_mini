import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import productphoto from "../components/media/product-photo-1.png";
import productphoto2 from "../components/media/headphones2.png";
import productphoto3 from "../components/media/headphones3.png";
import productphoto4 from "../components/media/headphones4.png";
import productphoto5 from "../components/media/headphones5.png";
import productphoto6 from "../components/media/headphones6.png";
import { Product, CartProduct } from '../types';

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

        console.log('Товар добавлен:', product);
    };
    const handleAddToCart = (product: Product) => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
        });
    };
    const headphones: Product[] = [
        {
            id: 1,
            img: productphoto,
            title: "Apple BYZ S852l",
            price: 2927,
            discountPrice: 3527,
            rate: 4.7,
            currencySign: "₽"
        },
        {
            id: 2,
            img: productphoto2,
            title: "Apple EarPods",
            price: 2327,
            discountPrice: undefined,
            rate: 4.5,
            currencySign: "₽"
        },
        {
            id: 3,
            img: productphoto3,
            title: "Apple EarPods",
            price: 2327,
            discountPrice: undefined,
            rate: 4.5,
            currencySign: "₽"
        },
        {
            id: 4,
            img: productphoto,
            title: "Apple EarPods",
            price: 2327,
            discountPrice: undefined,
            rate: 4.7,
            currencySign: "₽"
        },
        {
            id: 5,
            img: productphoto2,
            title: "Apple EarPods",
            price: 2327,
            discountPrice: undefined,
            rate: 4.5,
            currencySign: "₽"
        },
        {
            id: 6,
            img: productphoto3,
            title: "Apple EarPods",
            price: 2327,
            discountPrice: undefined,
            rate: 4.5,
            currencySign: "₽"
        }

    ];
    const headphones2: Product[] = [
        {
            id: 7,
            img: productphoto4,
            title: "Apple AirPods",
            price: 9527,
            discountPrice: undefined,
            rate: 4.7,
            currencySign: "₽"
        },
        {
            id: 8,
            img: productphoto5,
            title: "GERLAX GH-04",
            price: 6527,
            discountPrice: undefined,
            rate: 4.7,
            currencySign: "₽"
        },
        {
            id: 9,
            img: productphoto6,
            title: "BOROFONE BO4",
            price: 7527,
            discountPrice: undefined,
            rate: 4.7,
            currencySign: "₽"
        }
    ]
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