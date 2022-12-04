import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean Start up</p>
                <p className='product_ratings'>
                    <small>$</small>
                    <strong>22.56</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>

                </div>
            </div>

            {/* Product image */}
            <img src="https://images-eu.ssl-images-amazon.com/images/I/41skB7kHQbL._AC_SR400,600_.jpg" alt="" />

            {/* Product add to cart button */}
            <button>Add to cart</button>
        </div>
    );
};

export default Product;