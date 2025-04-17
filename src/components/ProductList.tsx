import React from 'react';
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    rate?: number;
    currencySign: string;
}

interface PostListProps {
    products: Product[];
    title: string;
}
const ProductList: React.FC<PostListProps> = ({ products, title }) => {

    return (
        <div>
            <h2 className="product-list-title">{title}</h2>
            <div className="product-list">
                {products.map((product, index) =>
                    <ProductCard
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        rate={product.rate}
                        currencySign={product.currencySign}
                        key={product.id} />
                )}
            </div>

        </div>
    )
}
export default ProductList;
