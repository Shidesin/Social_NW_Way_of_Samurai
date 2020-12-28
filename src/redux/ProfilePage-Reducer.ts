import {ActionTypes, ProfilePageType} from './store';
import {GetProfileItems} from '../components/Profile/ProfileContainer';
import {ProfileAPI} from '../api/api';
import {ThunkDispatchType, ThunkType} from './auth-reducer';

const ADD_POST = 'profileReducer/ADD-POST';
const REMOVE_POST = 'profileReducer/REMOVE_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';


let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: 'Hi, how are you?', CounterLike: 15},
        {id: 2, post: 'It\'s my first post!', CounterLike: 20}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPostText = action.textMessage
            return {
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    post: newPostText,
                    CounterLike: 0
                }]
            };
        }
        case REMOVE_POST:
            return {...state, postData: state.postData.filter(post => post.id !== action.postId)};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;

    }
};

export const AddPostActionCreator = (textMessage: string) => {
    return {type: ADD_POST, textMessage} as const
}

export const DeletePostActionCreator = (postId: number) => {
    return {type: REMOVE_POST, postId} as const
}

export const setUserProfile = (profile: GetProfileItems) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status} as const
}

export const getProfileData = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        let response = await ProfileAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
}

export const getStatus = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        let response = await ProfileAPI.getProfileStatus(userId)
        dispatch(setStatus(response))
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        let response = await ProfileAPI.updateProfileStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer;
