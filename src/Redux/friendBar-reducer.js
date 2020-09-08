import { usersAPI } from "../api/api";

let initialState = {
    FriendBarData: [
        { name: 'Саша', id: 1},
        { name: 'Діма', id: 2},
        { name: 'Таня', id: 3 }
    ],
    followedUsers: []
}
const GET_FRIEND = 'GET_FRIEND_LIST'

const friendBarReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_FRIEND: {
            return {
                ...state,
                followedUsers: action.frienList
            }
        }
        default:
         return state;
    }
    
    
}

export const setFriendList = (frienList) => ({ type: GET_FRIEND, frienList});

export default friendBarReducer;

export const getFriendList = () => {
    return async (dispatch) => {
        let response = await usersAPI.getFriendsList();
        dispatch(setFriendList(response.data.items))
    }
}

