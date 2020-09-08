import { usersAPI } from '../api/api';
import { getFriendList } from './friendBar-reducer';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    let FollowUpdateObjectInArray = (items, itemId, objPropName, newObjProps) => {
        return items.map(u => {
            if (u[objPropName] === itemId) {
                return { ...u, ...newObjProps }
            }
            return u;
        })

    }
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: FollowUpdateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: FollowUpdateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;

    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const isFetchingState = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isFetchingState(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(isFetchingState(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUserCount(response.totalCount));
    }
}

const folowUnfolowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFolowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(getFriendList());
        dispatch(toggleFolowingProgress(false, userId));
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unFollow = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
    }
}
export default usersReducer;