import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./landing/Landing";
import Footer from "./Footer";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Logout from "./logout/Logout";
import { Redirect } from 'react-router-dom';
import Profile from "./profile/Profile";
import MainChat from "./mainChat/MainChat";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: null,
            userProfile: null,
        };
        auth.onAuthStateChanged((user) => {
            if(user)
                db.collection("users").where("user", "==", user.uid).get()
                .then(
                    (snapShot) => {
                        snapShot.forEach((doc) => {
                            this.setState({
                                user: user,
                                userProfile: doc.data(),
                            });
                        });
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
            else
                this.setState({
                    user: null,
                    userProfile: null,
                });
        });
    }
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Header user={this.state.user}/>
                    <Switch>
                        <Route exact path="/login" render={(props) => !this.state.user ? <Login /> : <Redirect to='/' />}/>
                        <Route exact path="/signup" render={(props) => !this.state.user ? <Signup/> : <Redirect to='/' />} />
                        <Route exact path="/profile" render={(props) => this.state.user ? <Profile user={this.state.user} userProfile={this.state.userProfile}/> : <Redirect to='/' />} />
                        <Route exact path="/" render={(props) => <Landing {...props} user={this.state.user} userProfile={this.state.userProfile}/>}/>
                        <Route exact path="/logout" render={(props) => <Logout />} />
                        <Route exact path="/chat" render={(props) => this.state.user ? <MainChat /> : <Redirect to='/' />} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;