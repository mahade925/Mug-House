import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-citadel-69282.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `https://damp-citadel-69282.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Manage Products</h1>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        products.map(product => <div class="col">
                            <div class="card product-card">
                                <img src={product.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">{product.desc}</p>
                                    <h5>{product.price}</h5>
                                    <button className="btn btn-danger" onClick={() => handleDeleteProducts(product._id)}>Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;