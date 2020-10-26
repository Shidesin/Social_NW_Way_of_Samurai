import {ActionTypes} from './store';
import {AuthAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

const SET_USER_DATA = 'SET_USER_DATA';

export type GetAuthItemsType = {
    data: DataMeType
    messages: string[] | null
    fieldsErrors: string[] | null
    resultCode: number | null
}

export type DataMeType = {
    email: string | null,
    id: number | null,
    login: string | null
}

interface InitialStateType extends GetAuthItemsType {
    isFetching: boolean,
    isAuth: boolean
}


let initialState: InitialStateType = {
    data: {
        email: null,
        id: null,
        login: null
    },
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>

export const setAuthUserData = (data: DataMeType, isAuth: boolean) => {
    return {type: SET_USER_DATA, data, isAuth} as const
}

export const getAuthUserData = (isAuth: boolean): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        AuthAPI.getAuthMe()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data, isAuth))
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.logIn(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserData(true))
            }
        })
}

export const logOutTC = (): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.logOut()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData({email: null,id: null,login: null}, false))
            }
        })
}


export default authReducer;