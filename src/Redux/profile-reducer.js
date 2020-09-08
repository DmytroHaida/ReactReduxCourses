import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const SET_PHOTO_PROFILE = 'SET_PHOTO_PROFILE';
let initialState = {
    PostsData: [
        { id: 1, name: 'dima' },
        { id: 2, name: 'olya' },
        { id: 3, name: 'vanya' },
        { id: 4, name: 'alex' }
    ],
    profile: null,
    status: ' '
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newId = state.PostsData.length + 1;
            let newPost = {
                id: newId,
                name: action.NewPostText
            };
            return {
                ...state,
                PostsData: [newPost, ...state.PostsData],
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS_PROFILE:
            return { ...state, status: action.status }
        case SET_PHOTO_PROFILE:
            return { ...state, profile: {...state.profile, photos: action.photos} }
        default:
            return state;

    }
}
export const addPosts = (NewPostText) => ({ type: ADD_POST, NewPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS_PROFILE, status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO_PROFILE, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfileInfo = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfileInfo(profile);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;