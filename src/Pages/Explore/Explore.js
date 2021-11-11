import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="products-container container mt-5 mb-5">
            <h1 className="">Explore</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    products.map(product => <div class="col">
                        <div class="card product-card">
                            <img src={product.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.desc}</p>
                                <h5>{product.price}</h5>
                                <NavLink to={`/purchase/${product._id}`}>
                                    <button className="btn btn-dark">Buy Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Explore;