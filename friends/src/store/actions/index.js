import axios from "axios";

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const ADDING_FRIEND_START = "ADDING_FRIEND_START";
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS";
export const ADDING_FRIEND_FAILURE = "ADDING_FRIEND_FAILURE";


export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS_START});
    axios
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_FRIENDS_FAILURE, payload: err})
        })
}
    
export const addFriend = friend => dispatch => {
    dispatch({type: ADDING_FRIEND_START});
    axios
        .post("http://localhost:5000/api/friends", friend)
        .then(response => {
            console.log(response)
            dispatch({type: ADDING_FRIEND_SUCCESS, payload: response.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: ADDING_FRIEND_FAILURE, payload: err})
        })
}
