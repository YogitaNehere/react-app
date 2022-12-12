import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends React.Component{
    constructor(){
        super();
        //Code to initialise our component

    }
    render() {
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
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;