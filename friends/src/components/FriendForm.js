import React from "react";

function FriendForm(props) {
    return (
        <form onSubmit={props.addNewFriend}>  
            <input
            type="text"
            placeholder="New Friend Name"
            />
            <button type="submit">Add new friend</button>
        </form>
    )
}

export default FriendForm;