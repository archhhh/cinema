import React, { Component } from "react";


class MainChat extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            onlineUsers: [],
        };
    }
    render(){
        return (
            <div className="bg">
                <div className="wrapper">
                    <div className="main-chat">
                        <div className="main-chat-left">
                            <h2>main chat <a className="main-chat-create-room-button">create room</a></h2>
                        </div>
                        <div className="main-chat-right">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainChat;