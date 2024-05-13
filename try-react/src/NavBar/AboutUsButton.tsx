import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./AboutUsButton.css";

const AboutUsButton: FC = () => {
    return (<Link to="/about-us" style={{ textDecoration: 'none'}}>
    <div id="aboutus-button">About Us</div>
    </Link>
    )
};

export default AboutUsButton;