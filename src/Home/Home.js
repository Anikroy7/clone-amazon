import React from 'react';
import './Home.css';
import banner_image from '../assets/Images/home_banner_one.jpg';
import Product from '../Product/Product';
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">

                {/* Banner Image */}
                <img className='home_banner_image' src={banner_image} alt="" />

                {/* Home row start */}
                <div className="home_row">
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home_row">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home_row">
                    <Product></Product>
                </div>
            </div>
        </div>
    );
};

export default Home;