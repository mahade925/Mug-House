import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    let myOrders = orders.filter(order => order.email === user.email);

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
    
    return (
        <div>
            <h1>My Orders</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-5 text-start">
                {
                    myOrders.map(myOrder => <div className="col">
                        <div className="card p-3 border-0 bg-white order-card">
                            <h3>Name : {myOrder.name}</h3>
                            <h3>Email : {myOrder.email}</h3>
                            <h3>Phone : {myOrder.phone}</h3>
                            <h3>address : {myOrder.address}</h3>
                            <h3>Message : <p>{myOrder.message}</p></h3>
                            <button className="btn btn-outline-danger" onClick={() => handleDeleteOrders(myOrder._id)}>Cancel</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;