import React from "react";
import Friend from "./Friend";
import "./FriendList.css";

function FriendList(props) {
    return (
        <div className="friend-list">
            {props.friendsList.map(friend => 
                <Friend key={friend.id} friend={friend}/>)}
        </div>
    )
}

export default FriendList