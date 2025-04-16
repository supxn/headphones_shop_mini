import React from 'react';
import ProductCard from "./ProductCard";

const PostList = ({ products, title }) => {

    return (
        <div>
            <h2 className="product-list-title">{title}</h2>
            <div className="product-list">
                {products.map((product, index) =>
                    <ProductCard
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        oldprice={product.oldprice}
                        rate={product.rate}
                        key={product.id} />
                )}
            </div>

        </div>
    )
}
export default PostList;
