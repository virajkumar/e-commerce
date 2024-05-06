import React, { FC } from "react";
import NavBar from "./NavBar";
import SalePoster from "./SalePoster";
import SlideShow from "./SlideShow";
import Footer from "./Footer";

const Homepage: FC = () => {
    return (<div>
        <NavBar />
        <SalePoster />
        <SlideShow />
        <SalePoster />
        <SlideShow />
        <Footer />
        </div>);
};
export default Homepage;