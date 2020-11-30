import {ActionTypes, ProfilePageType} from './store';
import {GetProfileItems} from '../components/Profile/ProfileContainer';
import {GetFollowItems, ProfileAPI} from '../api/api';
import {ThunkDispatchType, ThunkType} from './auth-reducer';

const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


interface GetStatusItems extends GetFollowItems {
}

let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: 'Hi, how are you?', CounterLike: 15},
        {id: 2, post: 'It\'s my first post!', CounterLike: 20}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

// type initialStateProfileType = typeof initialState

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
        case 'REMOVE_POST':
            return {...state,postData: state.postData.filter(post => post.id !== action.postId)};
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
    return (dispatch: ThunkDispatchType) => {
        ProfileAPI.getProfile(userId)
            .then((data: GetProfileItems) => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        ProfileAPI.getProfileStatus(userId)
            .then((data: string) => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        ProfileAPI.updateProfileStatus(status)
            .then((data: GetStatusItems) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }
}

export default profileReducer;
