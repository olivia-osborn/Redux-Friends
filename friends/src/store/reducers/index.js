import {
    FETCHING_FRIENDS_START,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,
} from "../actions";

const initialState = {
    friendsList: [],
    error: null,
    isFetchingFriends: false,
    friendsFetched: false,
}

const friends = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS_START:
            return {
                ...state,
                isFetchingFriends: true,
                error: null
            }
        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetchingFriends: false,
                error: null,
                friendsFetched: true,
                friendsList: action.payload
            }
        case FETCHING_FRIENDS_FAILURE:
            return {
                ...state,
                isFetchingFriends: false,
                error: action.payload,
            }
        default: 
            return state;
    }
}

export default friends;