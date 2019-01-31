import axios from "axios";

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";


export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS_START});
    axios
        .get("http://localhost:5000/api/friends")
        .then(response => {
            console.log(response)
            dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCHING_FRIENDS_FAILURE, payload: err})
        })
}
    
