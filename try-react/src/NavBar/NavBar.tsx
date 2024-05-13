import React, { FC, useState } from "react";
import SearchBar from './SearchBar';
import './NavBar.css';
import HomeButton from './HomeButton';
import AboutUsButton from './AboutUsButton';
import StoreButton from './StoreButton';
import CartButton from './CartButton';
import OrdersButton from './OrdersButton';
import AccountOrLoginButton from './AccountOrLoginButton';

import { useDispatch } from 'react-redux';

const NavBar: FC = () => {
    //const [isGuest, setIsGuest] = useState(true);
    //const dispatch = useDispatch();

    return (<div>
        <div id="bar">
            <div>
                <img id="logo" src="company-logo-telestream-press-kit-12.png" alt="image not available" />
            </div>
            <div id="home" className="bar-element">
                <HomeButton />
            </div >
            <div id="about-us" className="bar-element">
                <AboutUsButton />
            </div>
            <div id="store" className="bar-element">
                <StoreButton />
            </div>
            <div id="search-bar" className="bar-element">
                <SearchBar />
            </div>
            <div id="cart" className="bar-element">
                <CartButton />
            </div>
            <div id="account" className="bar-element">
                <OrdersButton />
            </div>
            <div id="signup" className="bar-element">
                <AccountOrLoginButton />
            </div>
        </div>
    </div>);
};

export default NavBar;