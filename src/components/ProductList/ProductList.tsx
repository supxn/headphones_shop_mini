import React from 'react';
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from '../../types';
interface PostListProps {
    products: Product[];
    title: string;
    onAddToCart: (product: Product) => void;
}
export const ProductList: React.FC<PostListProps> = ({ products, title, onAddToCart }) => {

    return (
        <div>
            <h2 className="product-list-title">{title}</h2>
            <div className="product-list">
                {products.map((product, index) =>
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart} />
                )}
            </div>

        </div>
    )
}
