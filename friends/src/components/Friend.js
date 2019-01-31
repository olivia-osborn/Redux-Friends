import React from "react";

function Friend(props) {
    return (
        <>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </>
    )
}

export default Friend