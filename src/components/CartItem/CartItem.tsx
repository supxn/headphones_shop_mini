import React from 'react';
import './CartItem.css'
import deleteicon from "../../projectdata/assets/Vector.svg";

interface CartItemProps {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
    onQuantityChange: (newQuantity: number) => void;
    onRemove: () => void;
}
export const CartItem: React.FC<CartItemProps> = ({ 
    id,
    title, 
    price, 
    img,
    quantity, 
    onQuantityChange,
    onRemove
}) => {
    return (
<div className="cartItem">

        <div className="item-area">
            <div className="item-info">
                <img src={img} alt='' className="product-cart-img" />
                <div className="product-cart-info">
                    <span className="product-cart-name"> {title}</span>
                    <span className="product-cart-price"> {price.toLocaleString()} ₽</span>
                </div>
            </div>
           <div> <button className="delete-button" onClick={onRemove}><img src={deleteicon} alt=''/></button>
           </div>
        </div>
        <div className="cart-calculate-area">
            <div className="count-and-buttons">
                <button className="calculate-button"  onClick={() => onQuantityChange(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button className="calculate-button" onClick={() => onQuantityChange(quantity + 1)}>+</button>
            </div> 
            <div>{quantity * price}</div>
        </div>
       
</div>
    )
}
