import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, Logout } = useAuth();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Link to="/home"><img className="rounded-circle" width="280px" height="80px" src={logo} alt="" /></Link>
                </div>
                <div className="col-12 col-md-8">
                    <nav className="header">
                        <Link to="/home">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/topProduct">Popular</Link>
                        <Link to="/covid">Covid -19</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact us</Link>
                        <span>{user?.displayName}</span><Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>

                        {user?.email && <button onClick={Logout} type="button" className="btn btn-secondary mb-3 logOut">Log out</button>}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;