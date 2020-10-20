import sidebarReducer from './sidebar-Reducer';
import profileReducer from './ProfilePage-Reducer';
import dialogsReducer from './DialogPage-Reducer';
import usersReducer from './Users-Reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

type rootReducersType = typeof rootReducers;

export type AppStateType = ReturnType<rootReducersType>


let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


export default store;