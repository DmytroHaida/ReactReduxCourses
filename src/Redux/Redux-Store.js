import {combineReducers, createStore, applyMiddleware} from "redux";
import dialogsReducer from './dialogs-reducer ';
import profileReducer from './profile-reducer';
import friendBarReducer from './friendBar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    DialogPage: dialogsReducer, 
    ProfilePage: profileReducer, 
    FriendBarItem: friendBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;