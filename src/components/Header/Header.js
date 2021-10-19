import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Link to="/home"><img className="rounded-circle" width="250px" height="80px" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-8">
                    <nav className="header">
                        <Link to="/home">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/topProduct">Popular</Link>
                        <Link to="/covid">Covid -19</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact us</Link>
                        <button type="submit" className="btn btn-primary m-3">Sign Up</button>
                        <button type="submit" className="btn btn-success">Sign In</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;