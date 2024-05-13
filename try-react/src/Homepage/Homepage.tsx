import React, { FC } from "react";
import NavBar from "../NavBar/NavBar";
import SalePoster from "./SalePoster";
import HomeContainer from "./HomeContainer";
import Footer from "../Footer";

const Homepage: FC = () => {
    return (<div>
        <NavBar />
        <div id="poster-container">
            <SalePoster />
        </div>
        <HomeContainer />
        <Footer />
        </div>);
};
export default Homepage;