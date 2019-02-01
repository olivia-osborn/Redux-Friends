import React from "react";
import "./Friend.css";

function Friend(props) {
    return (
        <div className="friend">
            <p className="name">{props.friend.name}</p>
            <p>age: {props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default Friend