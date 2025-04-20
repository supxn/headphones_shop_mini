import React from 'react';
import { Product } from '../../types';
import star from '../../projectdata/assets/star.svg'
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
          <img src={star} alt=''/>
          <span>{product.rate}</span>
        </div>
        <button className='buy-button' onClick={() => onAddToCart(product)}>Купить</button>
      </div>
    </div>
  )
}