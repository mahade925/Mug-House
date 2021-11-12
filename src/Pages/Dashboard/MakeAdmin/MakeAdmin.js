import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault()
    }
    return (
        <div className="make-admin-container container w-50">
            <h1>Make Admin</h1>
            <div class="form-floating mb-3 mt-5">
                <input type="text" class="form-control" onBlur={handleEmail} name="email" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Email</label>
            </div>
            <button className="btn btn-info btn-lg w-100" onClick={handleMakeAdmin}>Make admin</button>
        </div>
    );
};

export default MakeAdmin;