import React from 'react';
import './CheckoutPage.css'
import emptyLogo from '../../assets/icons/checkout_empty_image.svg';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
const CheakoutPage = () => {
    const [state, dispatch] = useStateValue();
    const products = state.basket;


    return (
        <div className="checkout">

            {/* Checkout page left side start */}
            <div className="checkout_left_side">
                {products.length > 0 ? '' : <img className='checkout_empty_logo' src={emptyLogo} alt="" />}
                <div className="empty_checkout_info">
                    {products.length > 0 ? <h3 className='basket_heading'>Your Shopping Basket</h3> : <h3 className='basket_heading'>Your Amazone Cart is empty</h3>}


                </div>
                <hr />

                {/* Show to add to cart porduct */}

                {
                    products.map(product => {
                        const { id, title, image, price, ratings } = product;

                        const handleRemoveFromBasket = () => {
                            const isConfirm = window.confirm("I will be deleted from your busket. Are You Sure??");
                            if (isConfirm) {
                                dispatch({
                                    type: "REMOVE_FROM_BASKET",
                                    id: id
                                })
                                console.log('clicked');
                            }
                        }

                        return <div className='checkout_product'>
                            <img src={image} alt="" />
                            <div className='checkout_product_info'>
                                <h4>{title}</h4>
                                <small>$</small>
                                <strong>{price}</strong>
                                <p>{Array(ratings).fill("⭐")}</p>
                                <button onClick={handleRemoveFromBasket}>Remove from basket</button>
                            </div>
                        </div>
                    })
                }
            </div>

            {/* Cheackout page right side */}
            <div className="checkout_left_side">
                <Subtotal></Subtotal>
            </div>
        </div>
    );
};

export default CheakoutPage;