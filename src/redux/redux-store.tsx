import {combineReducers, createStore} from 'redux';
import sidebarReducer from './sidebar-Reducer';
import profileReducer from './ProfilePage-Reducer';
import dialogsReducer from './DialogPage-Reducer';
import {StoreType} from './store';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
});

type reducersType = typeof reducers;
export type AppStateType = ReturnType<reducersType>

let store: StoreType = createStore(reducers);

export default store;