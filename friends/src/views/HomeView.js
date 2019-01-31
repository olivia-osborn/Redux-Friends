import React from "react";
import { connect } from "react-redux"

import FriendList from "../components/FriendList";
import FriendForm from "../components/FriendForm";
import { getFriends, addFriend } from "../store/actions"

class HomeView extends React.Component {
    state = {
        friend: {
            age: null,
            name: "",
            email: ""
        }
    }

    componentDidMount() {
        this.props.getFriends()
    }

    populateForm = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
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
                <FriendForm
                    addNewFriend={this.addNewFriend}
                    populateForm={this.populateForm}
                />
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
        getFriends,
        addFriend
    }
)(HomeView);