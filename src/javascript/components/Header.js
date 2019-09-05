import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";


const Header = (props) => {
    return (
            <header>
                <h1 className="logo">
                    <Link to="/">Logo</Link>
                </h1>
                <Navbar user={props.user}/>
            </header>
    );
};

export default Header;