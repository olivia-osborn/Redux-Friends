import React from "react";
import "./FriendForm.css";

function FriendForm(props) {

    return (
        <form className="form">  
            <input
                type="text"
                placeholder="Name..."
                onChange={props.populateForm}
                name="name"
            />
            <input
                type="text"
                placeholder="Age..."
                onChange={props.populateForm}
                name="age"
            />
            <input
                type="text"
                placeholder="email..."
                onChange={props.populateForm}
                name="email"
            />
            <button onClick={e => props.addNewFriend(e)}>Add new friend</button>
        </form>
    )
}

export default FriendForm;