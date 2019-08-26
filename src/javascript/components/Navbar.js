import { Link } from "react-router-dom";
import React, { Component } from "react";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.links = [
            {
                path: '#', 
                text: "Home",
            },
            {
                path: '/about-us', 
                text: "About Us",
            },
        ];
        this.state = {
            toggleButton: false,
        };
    }
    toggleButton = () => {
        this.setState({
            toggleButton: !this.state.toggleButton,
        });
    }
    render(){
        return (
            <nav>
                <h1 className="logo">
                    <Link to="/">HAHAYES</Link>
                </h1>
                <button type="button" className="navbar-toggle" onClick={this.toggleButton}>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span> 
                </button>
                <ul className={this.state.toggleButton ? "navbar-links open" : "navbar-links"}>
                    {
                        this.links.map((link, i) => {
                            return <li className="navbar-link"><Link exact to={link.path}>{link.text}</Link></li>;
                        })
                    }
                </ul>
            </nav>
        );
    }
};

export default Navbar;