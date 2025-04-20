import React from 'react';
import { Product } from '../../types';
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">

      <img src={product.img} className="card-img" alt='' />
      <div className="product-inform-area">
        <span>{product.title}</span>
        <div className="price">
          <span>{product.price} {product.currencySign}</span>
          <span className="old-price">
            {product.discountPrice !== undefined ? product.discountPrice + ' ' + product.currencySign : ''}
          </span>
        </div>
      </div>

      <div className="product-inform-area">
        <div className="product-stars">
          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F" />
          </svg>
          <span>{product.rate}</span>
        </div>
        <button className='buy-button' onClick={() => onAddToCart(product)}>Купить</button>
      </div>

    </div>
  )
}