import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./StoreButton.css";

const StoreButton: FC = () => {
    return (<Link to="/store" style={{ textDecoration: 'none'}}>
    <div id="store-button">Store</div>
    </Link>
    )
};

export default StoreButton;