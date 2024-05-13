import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import './AccountOrLoginButton.css'

const AccountOrLoginButton: FC = () => {
    const user = useSelector((state: AppState) => state.user);
    let accountOrLogin: string;
    let buttonName: string;
    if (user) {
        if (user.guest) {
            accountOrLogin = "/login";
            buttonName = "Login";
        } else {
            accountOrLogin = "/account";
            if (user.username) {
                buttonName = user.username;
            } else {
                buttonName = "error";
            }
        }
        return (<Link to={accountOrLogin} style={{ textDecoration: 'none' }}>
            <div id="account-or-login-button">{buttonName}</div>
        </Link>
        )
    } else {
        return <div></div>;
    }
};

export default AccountOrLoginButton;