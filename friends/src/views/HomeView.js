import React from "react";
import { connect } from "react-redux"

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";
import { getFriends } from "../store/actions"

class HomeView extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log("Rendering", this.props.friendsList)
        return (
            <>
                {this.props.isFetchingFriends && (
                    <h4>Wait while we fetch your data...</h4>
                )}
                {this.props.friendsList && (
                    <FriendList 
                        friendsList={this.props.friendsList}
                    />
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <FriendForm/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    friendsList: state.friendsList,
    error: state.error,
    isFetchingFriends: state.isFetchingFriends
});

export default connect(
    mapStateToProps,
    {
        getFriends
    }
)(HomeView);