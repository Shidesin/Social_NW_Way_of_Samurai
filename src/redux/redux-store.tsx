import {combineReducers, createStore} from 'redux';
import sidebarReducer from './sidebar-Reducer';
import profileReducer from './ProfilePage-Reducer';
import dialogsReducer from './DialogPage-Reducer';
import usersReducer from './Users-Reducer';



let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

type rootReducersType = typeof rootReducers;

export type AppStateType = ReturnType<rootReducersType>


let store = createStore(rootReducers);


export default store;