import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const { user, signupUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSignup = e => {
        signupUser(loginData.email, loginData.password, location, history);
        if(user.email) {
            alert('Succeffuly Signup');
        }
        e.preventDefault();
    }
    return (
        <div className="main">
            <p className="sign">Sign up</p>
            <form className="form1" onSubmit={handleSignup}>
                <input className="un " type="text" onBlur={handleOnChange} name="name" align="center" placeholder="Name" />
                <input className="un " type="email" onBlur={handleOnChange} name="email" align="center" placeholder="Email" />
                <input className="pass" type="password" onBlur={handleOnChange} name="password" align="center" placeholder="Password" /><br />
                <button className="submit" align="center">Sign up</button>
                <NavLink to="/login">
                    <p className="forgot" align="center"><a href="#">Already have an account ?</a></p>
                </NavLink>
            </form>
        </div>
    );
};

export default Signup;