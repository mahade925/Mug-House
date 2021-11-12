import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    const handleDeleteOrders = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    const handleShipped = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                }
            })
    }
    
    return (
        <div>
            <h1>Manage All Orders</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-5 text-start">
                {
                    orders.map( order => <div className="col">
                        <div className="card p-3 border-0 bg-white order-card">
                            <h3>Name : { order.name}</h3>
                            <h3>Email : { order.email}</h3>
                            <h3>Phone : { order.phone}</h3>
                            <h3>address : { order.address}</h3>
                            <h3>Status : { order?.status}</h3>
                            <h3>Message : <p>{ order.message}</p></h3>
                            <button className="btn btn-outline-danger" onClick={() => handleDeleteOrders( order._id)}>Cancel</button>
                            <button className="btn btn-outline-info mt-3" onClick={() => handleShipped(order._id)}>Shipped</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;