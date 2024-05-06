import React, { FC } from "react";
import SearchBar from './SearchBar';
import './NavBar.css';

export interface NavBarItem {
    id: number;
    name: string;
    hasDropMenu: boolean;
    dropMenuItems?: string[];
    isHover: boolean;
    isCart: boolean;
    cartQuantity?: number;
}

export interface NavBarItems {
    navBarItems?: Array<NavBarItem>;
}

const NavBar: FC<NavBarItems> = () => {
    return (<div>
            <div id="bar">
                <div>
                    <img id="logo" src="company-logo-telestream-press-kit-12.png" alt="image not available"/>
                </div>
                <div id="home">
                    Home
                </div >
                <div id="about-us">
                    About Us
                </div>
                <div id="search-bar">
                    <SearchBar />
                </div>
            </div>
        </div>);
};
export default NavBar;