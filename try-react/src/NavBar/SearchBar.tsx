import React, { FC } from "react";
import "./SearchBar.css"

const SearchBar: FC = () => {
    return (<div id="flexContainer">
            <input id="search-bar-2" placeholder="Search Oxygen.in" />
            <button id="submit-button" type="submit"/>
        </div>);
};
export default SearchBar;