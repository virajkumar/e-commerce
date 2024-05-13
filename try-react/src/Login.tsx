import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

const Login: FC = () => {
    const [isGuest, setIsGuest] = useState(true);
    const dispatch = useDispatch();
    return <div>Login</div>;
};
export default Login;