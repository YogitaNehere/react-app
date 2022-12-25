import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    return(
        <header>
            <nav className='nav-bar'>
                <div>
                    {/* CLIENT SIDE ROUTING */}
                    <Link to="/">Home</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/about-us">About Us</Link>
                    {/* Below is default HTMl Routing */}
                    {/* <a href='/'>Home</a>
                    <a href='/contact-us'>Contact Us</a>
                    <a>About Us</a> */}
                </div>
                <div>
                    {/* <a>Login</a> */}
                    <div className='cart-container'>
                    <img className="cart-icon" src='' />
                    <span className='cart-count'>{cart.itemsCount}</span>
                    </div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    );
}
export default Header;