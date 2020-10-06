import {ActionTypes} from './store';

const SET_USER_DATA = 'SET_USER_DATA';

export type GetAuthItemsType = {
    data: DataMeType
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export type DataMeType ={
    email: string | undefined,
    id: number | null,
    login: string | undefined
}

let initialState = {
    data: {
        email: undefined,
        id: null,
        login: undefined
    },
    isFetching: false,
    isAuth: false,
    messages: null,
    fieldsErrors: null,
    resultCode: null
}

type initialStateUsersType = typeof initialState


const authReducer = (state: initialStateUsersType = initialState , action: ActionTypes): initialStateUsersType  => {
    switch (action.type) {
        case SET_USER_DATA:
            return <initialStateUsersType>{
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


export default authReducer;