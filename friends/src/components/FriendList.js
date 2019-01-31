import React from "react";
import Friend from "./Friend";

function FriendList(props) {
    return (
        props.friendsList.map(friend => 
            <Friend friend={friend}/>)
    )
}

export default FriendList