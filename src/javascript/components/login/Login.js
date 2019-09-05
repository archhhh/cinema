import React, {Component} from "react";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    changeInput = (value, type) => {
        this.setState({
            [type]: value
        });
    }
    login = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });
    }
    render(){
        return (
            <div className="bg">
                <div className="wrapper">
                    <div className="login">
                        <i className="fas fa-lock"></i><br />
                        <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.changeInput(e.target.value, "email")}></input><br />
                        <input type="password" placeholder="password" value={this.state.password} onChange={(e) => this.changeInput(e.target.value, "password")}></input><br />
                        <button className="login-button" onClick={this.login}>login</button><br />
                    </div>
                </div>
            </div>
        );
    }
};


export default Login;