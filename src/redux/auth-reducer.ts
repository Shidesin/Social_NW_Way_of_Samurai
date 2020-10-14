import {ActionTypes} from './store';
import {AuthAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

export type GetAuthItemsType = {
    data: DataMeType
    messages: string[] | null
    fieldsErrors: string[] | null
    resultCode: number | null
}

export type DataMeType ={
    email: string | undefined,
    id: number | null,
    login: string | undefined
}

interface InitialStateType extends GetAuthItemsType {
    isFetching: boolean,
    isAuth: boolean
}


let initialState: InitialStateType = {
    data: {
        email: undefined,
        id: null,
        login: undefined
    },
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isFetching: false,
    isAuth: false,

}

const authReducer = (state: InitialStateType = initialState , action: ActionTypes): InitialStateType  => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserData = (data: DataMeType)=> {
    return {type: SET_USER_DATA, data} as const
}

export const getAuthUserData = () => {
    return (dispatch: any) => {
        AuthAPI.getAuthMe()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data))
                }
            })
    }
}


export default authReducer;