import React from "react";
import FriendList from "../components/FriendList";

class ListView extends React.Component {
    render() {
        return (
            <FriendList />
        )
    }
}



const mapStateToProps = state => ({
    friendsList: state.friendsList
});

export default connect(
    mapStateToProps,
    {
        //action creators go here
    }
)(ListView);