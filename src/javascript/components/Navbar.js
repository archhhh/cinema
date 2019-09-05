import { Link } from "react-router-dom";
import React from "react";

const loggedOutLinks = [
    {
        path: '/login', 
        icon: "fas fa-lock",
    },
    {
        path: '/signup', 
        icon: "fas fa-user",
    },
];
const loggedInLinks = [
    {
        path: '/chat', 
        icon: "far fa-comment",
    },
    {
        path: '/room', 
        icon: "fas fa-film",
    },   
    {
        path: '/profile', 
        icon: "fas fa-user-circle",
    },   
    {
        path: '/logout', 
        icon: "fas fa-sign-out-alt",
    },   
];
const Navbar = (props) => {
    const links = props.user ? loggedInLinks : loggedOutLinks;
    return (
        <nav>
            <ul className="navbar-links">
                {
                    links.map((link, i) => {
                        return <li className="navbar-link"><Link exact to={link.path}><i className={link.icon}></i></Link></li>;
                    })
                }
            </ul>
        </nav>
    );
};
        

export default Navbar;