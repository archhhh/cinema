import React from "react";
import { Link } from "react-router-dom";


const Landing = (props) => {
    if(props.user)
        return (
            <div className="bg">
                <div className="wrapper">
                    <div className="landing-text">
                        <p>{props.userProfile.nickname}, it seems that you are not in a room yet.</p>
                        <p>create room or checkout the global chat.</p>
                        <Link to='/create_room' className="landing-button">create room</Link>
                        <Link to='/chat' className="landing-button">chat</Link>
                    </div>
                </div>  
            </div>
        );
    return (
        <div className="bg">
            <div className="wrapper">
                <div className="landing-text">
                    <p>watch your favorite movies/videos with your friends.</p>
                    <p>if you don't have one, find one here.</p>
                    <Link to='/login' className="landing-button">enter</Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
