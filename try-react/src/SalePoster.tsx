import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./SalePoster.css"

const SalePoster: FC = () => {
    return (<div>
        <Link to="/store">
            <div id="store-link">40% sale</div>
        </Link>
    </div>);
};
export default SalePoster;