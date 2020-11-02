import {ActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {FormAction} from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialaized: false
}

const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialaized: action.initialaized
            }
        default:
            return state
    }
}


export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes | FormAction>

export const initialaizedSuccess = (initialaized: boolean) => ({type: INITIALIZED_SUCCESS, initialaized} as const)

export const initialaizeApp = (initialaized: boolean): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData(initialaized))
    Promise.all([promise]).then(() => {
        dispatch(initialaizedSuccess(initialaized))
    })
}


export default appReducer;