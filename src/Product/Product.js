import React from 'react';
import './Product.css';

const Product = ({ title, price, ratings, image }) => {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_ratings'>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <p>{
                        Array(ratings).fill("⭐")
                    }</p>
                </div>
            </div>

            {/* Product image */}
            <img src={image} alt="" />

            {/* Product add to cart button */}
            <button>Add to cart</button>
        </div>
    );
};

export default Product;