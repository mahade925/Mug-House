import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container mb-5">
            <div className="container text-white">
                <h1 className="banner-title display-2 fw-bold">CREATIVE <br /> DESIGNED MUG</h1>
                <button className="shop-now-btn py-3 mt-5 border-0 text-white fs-5">SHOP NOW</button>
            </div>
        </div>
    );
};

export default Banner;