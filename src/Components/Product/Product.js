import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

const Product = ({ id, title, price, ratings, image }) => {

    const [state, dispatch] = useStateValue();



    const addToBasket = (_id) => {
        const products = state.basket;
        const newProduct = products.filter(pd => pd.id === _id);
        if (newProduct.length === 0) {
            dispatch({
                type: "ADD_TO_BASKET",
                item: { id, title, price, ratings, image }
            })
        } else {
            alert('You have already added this product!!')
        }
    }



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
            <button onClick={() => addToBasket(id)}>Add to cart</button>
        </div>
    );
};

export default Product;