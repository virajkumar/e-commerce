import React, { FC } from "react";
import SearchBar from './SearchBar';
import './NavBar.css';
import HomeButton from './HomeButton';
import AboutUsButton from './AboutUsButton';

const NavBar: FC = () => {
    return (<div>
        <div id="bar">
            <div>
                <img id="logo" src="company-logo-telestream-press-kit-12.png" alt="image not available" />
            </div>
            <div id="home" className="bar-element">
                <HomeButton />
            </div >
            <div id="about-us" className="bar-element">
                About Us
            </div>
            <div id="store" className="bar-element">
                Store
            </div>
            {/* <div id="search-bar" className="bar-element">
                    {/*<SearchBar />
                </div> */}
            <div id="cart" className="bar-element">
                Cart
            </div>
            <div id="account" className="bar-element">
                Account
            </div>
            <div id="signup" className="bar-element">
                Signup
            </div>
            <div id="login" className="bar-element">
                Login
            </div>
        </div>
    </div>);
};

export default NavBar;