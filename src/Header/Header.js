import React from 'react';
import './Header.css';
import logo from '../assets/icons/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const Header = () => {
    return (
        <section className='header'>

            {/* Header logo and search field */}
            <img className='header_logo' src={logo} alt="" />
            <div className='header_search'>
                <input type="text" className="header_search_field" />
                <SearchIcon className='search_icon'></SearchIcon>
            </div>


            {/* Header navigation menu */}
            <div className="header_nav">

                <div className="header_option">
                    <span className='header_option_first_line'>Hello</span>
                    <span className='header_option_second_line'>Sign in</span>
                </div>

                <div className="header_option">
                    <span className='header_option_first_line'>Returns</span>
                    <span className='header_option_second_line'>& Orders</span>
                </div>

                <div className="header_option">
                    <span className='header_option_first_line'>Your</span>
                    <span className='header_option_second_line'>Prime</span>
                </div>

                <div className="header_basket">
                    <ShoppingBasketIcon className='header_basket_icon' />
                    <span className='header_option_second_line header_option'>0</span>
                </div>
            </div>



        </section>
    );
};

export default Header;