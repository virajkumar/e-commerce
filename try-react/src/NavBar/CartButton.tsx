import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./CartButton.css";

const CartButton: FC = () => {
    return (<Link to="/cart" style={{ textDecoration: 'none'}}>
    <div id="cart-button">Cart</div>
    </Link>
    )
};

export default CartButton;