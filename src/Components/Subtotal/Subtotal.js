import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => <div>
                    <p className='subtotal_status'>Subtotal (0 items): <strong>0</strong></p>
                    <small className='subtotal_gift'>
                        <input className='input_checkbox' type="checkbox" />
                        This order contains a gift
                    </small>
                </div>}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='checkbox_button'>Procced to checkout</button>
        </div>
    );
};

export default Subtotal;