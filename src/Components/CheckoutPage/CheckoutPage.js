import React from 'react';
import './CheckoutPage.css'
import emptyLogo from '../../assets/icons/checkout_empty_image.svg';
import Subtotal from '../Subtotal/Subtotal';
const CheakoutPage = () => {
    return (
        <div className="checkout">

            {/* Checkout page left side start */}
            <div className="checkout_left_side">
                <img className='checkout_empty_logo' src={emptyLogo} alt="" />
                <div className="empty_checkout_info">
                    <h3 className='basket_heading_active'>Your Amazone Cart is empty</h3>
                    <h3 className='basket_heading'>Your Shopping Basket</h3>
                </div>
                <hr />

                {/* Show to add to cart porduct */}
            </div>

            {/* Cheackout page right side */}
            <div className="checkout_left_side">
                <Subtotal></Subtotal>
            </div>
        </div>
    );
};

export default CheakoutPage;