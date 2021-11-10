import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h1 class="navbar-brand fs-2">Paint Pottery</h1>
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/home" style={{ textDecoration: 'none' }}>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Home</a>
                            </li>
                        </NavLink>
                        <NavLink to="/explore" style={{ textDecoration: 'none' }}>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Explore</a>
                            </li>
                        </NavLink>

                        {
                            user?.email ?
                                <>
                                    <li class="nav-item">
                                        <a class="nav-link fs-5" href="#">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fs-5" href="#">User : {user?.email}</a>
                                    </li>
                                    <button onClick={logout} className="btn btn-danger">Logout</button>
                                </>
                                :
                                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                    <li class="nav-item">
                                        <a class="nav-link fs-5" href="#">Login</a>
                                    </li>
                                </NavLink>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;