import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./OrdersButton.css";

const OrdersButton: FC = () => {
    return (<Link to="/orders" style={{ textDecoration: 'none'}}>
    <div id="orders-button">Orders</div>
    </Link>
    )
};

export default OrdersButton;