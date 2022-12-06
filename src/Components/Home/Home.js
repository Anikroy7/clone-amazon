import React from 'react';
import './Home.css';
import banner_image from '../../assets/Images/home_banner_one.jpg';
import Product from '../Product/Product';
const Home = () => {
    return (
        <section>
            <div className="home">
                <div className="home_container">

                    {/* Banner Image */}
                    <img className='home_banner_image' src={banner_image} alt="" />

                    {/* Home row start */}
                    <div className="home_row">
                        <Product
                            id={1}
                            title="AVITA SATUS ULTIMUS S111 NU14A1INC43PN-SG 14.1 FHD (35.81)"
                            price={11.24}
                            ratings={3}
                            image="https://images-eu.ssl-images-amazon.com/images/I/41skB7kHQbL._AC_SR400,600_.jpg"
                        ></Product>
                        <Product
                            id={2}
                            title="Lenovo IdeaCentre 3 Desktop (12th Gen Intel Core i5 12400/8GB/1TB"
                            price={74400.52}
                            ratings={5}
                            image="https://images-eu.ssl-images-amazon.com/images/I/31tYz67qgCL._AC_SR400,600_.jpg"
                        ></Product>
                    </div>
                    <div className="home_row">
                        <Product
                            id={3}
                            title="Sounce AirPods Pro Case, Soft Silicone Skin Case,Spigen Premium Case Cover for Airpods Pro"
                            price={199.23}
                            ratings={2}
                            image="https://images-eu.ssl-images-amazon.com/images/I/41dO3M99-PS._AC_SX184_.jpg"
                        ></Product>
                        <Product
                            id={4}
                            title="WeCool S2 Bluetooth Extendable Selfie Stick with Wireless Remote, 103 Cms Long Selfie Stick."
                            price={699}
                            ratings={5}
                            image={"https://m.media-amazon.com/images/I/71oGiXEB5JL._AC_UL320_.jpg"}
                        ></Product>
                        <Product
                            id={5}
                            title="BoAt Immortal IM1000D Dual Channel Wired On Ear Gaming Headphones with Dolby Atmos, with Mic."
                            price={866}
                            ratings={3}
                            image="https://images-eu.ssl-images-amazon.com/images/I/41lxtwVcaoL._AC_SX184_.jpg"
                        ></Product>
                    </div >
                    <div className="home_row">
                        <Product
                            id={6}
                            title="NV Prime Car/Bike Waterproof NXT GEN GPS Tracker with 5 Years Warranty"
                            price={566.7}
                            ratings={5}
                            image="https://m.media-amazon.com/images/I/61VRN1hHouL._SX425_.jpg"
                        ></Product>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default Home;