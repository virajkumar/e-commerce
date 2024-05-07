import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./HomeButton.css";

const HomeButton: FC = () => {

    // const handleClick = (e) => {

    // }
    return (<Link to="/" style={{ textDecoration: 'none'}}>
    <div id="homepage-button" /*onClick={handleClick}*/>Home</div>
    </Link>
    )
};

export default HomeButton;