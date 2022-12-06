import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => <div>
                    <p className='subtotal_status'>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                    <small className='subtotal_gift'>
                        <input className='input_checkbox' type="checkbox" />
                        This order contains a gift
                    </small>
                </div>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='checkbox_button'>Procced to checkout</button>
        </div>
    );
};

export default Subtotal;