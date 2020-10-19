import {ActionTypes, ProfilePageType} from './store';
import {GetProfileItems} from '../components/Profile/ProfileContainer';
import {ProfileAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: 'Hi, how are you?', CounterLike: 15},
        {id: 2, post: 'It\'s my first post!', CounterLike: 20}
    ] ,
    newPostText: '',
    profile: null
}

// type initialStateProfileType = typeof initialState

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText
            return {
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    post: newPostText,
                    CounterLike: 0
                }],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;

    }
};

export const AddPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const onPostChangeActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export const setUserProfile = (profile: GetProfileItems) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const getProfileData = (userId: string) => {
    return (dispatch: any) => {
        ProfileAPI.getProfile(userId)
            .then((data: GetProfileItems) => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer;
