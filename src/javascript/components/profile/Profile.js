import React from "react";


const Profile = (props) => {
    return (
        <div className="bg">
                <div className="wrapper">
                    <div className="profile">
                        <i className="fas fa-user-circle"></i><br />
                        <p>hi, {props.userProfile.nickname}.</p>
                        <p>your email address is {props.user.email}.</p>
                        <p>you are not in a room yet. </p>
                    </div>
                </div>
        </div>
    );
};


export default Profile;