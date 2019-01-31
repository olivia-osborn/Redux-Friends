import React from "react";
import Friend from "./Friend";

function FriendList(props) {
    return (
        props.friendsList.map(friend => 
            <Friend key={friend.id} friend={friend}/>)
    )
}

export default FriendList