import React, {Component} from "react";
import { Redirect } from 'react-router-dom';


class Logout extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
        };
    }
    componentDidMount = () => {
        auth.signOut().then( () => {
            this.setState({
               redirect: true
            });
        });
    }
    render(){
        if(this.state.redirect)
            return <Redirect to='/' />;
        return (
            <div className="bg">
                <div className="wrapper">
                    <div className="logout">
                        <p>logging out...</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Logout;