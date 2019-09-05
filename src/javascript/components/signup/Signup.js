import React, {Component} from "react";


class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            nickname: "",
            password: "",
            repeatPassword: "",
        };
    }
    changeInput = (value, type) => {
        this.setState({
            [type]: value
        });
    }
    signup = () => {
        if(this.state.password == this.state.repeatPassword)
            db.collection("users").where("nickname", "==", this.state.nickname).get().then(
                (query) => {
                    if(query.exists){
                        let errorMessage = "nickname exists";
                        console.log(errorMessage); 
                    }else{
                        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(
                            (userCred) => {
                                db.collection("users").add({
                                    user: userCred.user.uid,
                                    nickname: this.state.nickname,
                                }).catch(function(error) {
                                    // Handle Errors here.
                                    let errorCode = error.code;
                                    let errorMessage = error.message;
                                    console.log(errorMessage);
                                    // ...
                                });
                            }
                        ).catch(function(error) {
                            // Handle Errors here.
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            console.log(errorMessage);
                            // ...
                        }); 
                    }
                }
            ).catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
            
    }
    render(){
        return (
            <div className="bg">
                <div className="wrapper">
                    <div className="signup">
                        <i className="fas fa-user"></i><br />
                        <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.changeInput(e.target.value, "email")}></input><br />
                        <input type="text" placeholder="nickname" value={this.state.nickname} onChange={(e) => this.changeInput(e.target.value, "nickname")}></input><br />
                        <input type="password" placeholder="password" value={this.state.password} onChange={(e) => this.changeInput(e.target.value, "password")}></input><br />
                        <input type="password" placeholder="repeat password" value={this.state.repeatPassword} onChange={(e) => this.changeInput(e.target.value, "repeatPassword")}></input><br />
                        <button className="signup-button" onClick={this.signup}>signup</button><br />
                    </div>
                </div>
            </div>
        );
    }
};


export default Signup;