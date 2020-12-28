import {ActionTypes} from './store';
import {AuthAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {FormAction, stopSubmit} from 'redux-form';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';

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
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes | FormAction>

export const setAuthUserData = (data: DataMeType, isAuth: boolean) => {
    return {type: SET_USER_DATA, data, isAuth} as const
}

export const getAuthUserData = (isAuth: boolean): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await AuthAPI.getAuthMe()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data, isAuth))
    }

}


export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await AuthAPI.logIn(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData(true))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logOutTC = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await AuthAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData({email: null, id: null, login: null}, false))
    }
}


export default authReducer;