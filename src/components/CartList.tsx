import React, { useState } from 'react';
import { useEffect } from 'react';
import CartItem from "../components/CartItem";
import '../styles/CartList.css'

interface CartProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
}
export interface CartProps {
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
  }

const CartList = ({ cartCounter, setCartCounter }: CartProps) => {

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    setCartProducts(savedCart);
  }, []);

  // Расчет общей суммы при изменении корзины
  useEffect(() => {
    const newTotal = cartProducts.reduce(
      (sum, product) => sum + product.price * product.quantity, 0
    );
    const newCount = cartProducts.reduce(
      (sum, product) => sum + product.quantity, 0
    );
    setCartCounter(newCount)
    setTotalPrice(newTotal);
  }, [cartProducts]);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cartProducts.map(product =>
      product.id === productId ? { ...product, quantity: Math.max(1, newQuantity) } : product
    );
    setCartProducts(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cartProducts.filter(product => product.id !== productId);
    setCartProducts(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-list">
      <div className="cards">
        {cartProducts.map((product: any, index: number) =>
          <CartItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          img={product.img}
          quantity={product.quantity}
          onQuantityChange={(newQty: number) => handleQuantityChange(product.id, newQty)}
          onRemove={() => handleRemoveItem(product.id)}
      
          />
        )}
      </div>
      <div className="summary">
        <div className="summary-card">
          <div className="summary-count">
            <span>ИТОГО</span>
            <span>₽ {totalPrice.toLocaleString()}</span>
          </div>
          <button className="checkout-button">Перейти к оформлению</button>
        </div>
      </div>
    </div>
  )
}
export default CartList;