import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        console.log(user);
        e.preventDefault();
    }
    return (
        <div className="main">
            <p className="sign">Log in</p>
            <form className="form1" onSubmit={handleLoginSubmit}>
                <input className="un " type="email" name="email" onBlur={handleOnChange} align="center" placeholder="Email" />
                <input className="pass" type="password" name="password" onBlur={handleOnChange} align="center" placeholder="Password" /><br />
                <button className="submit" align="center">Log in</button>
                <NavLink to="/signup">
                    <p className="forgot" align="center"><a href="#">Don't have any account ?</a></p>
                </NavLink>
            </form>
        </div>
    );
};

export default Login;