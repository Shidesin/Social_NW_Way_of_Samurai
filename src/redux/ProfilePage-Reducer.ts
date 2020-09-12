import {ActionTypes} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {id: 1, post: 'Hi, how are you?', CounterLike: 15},
        {id: 2, post: 'It\'s my first post!', CounterLike: 20}
    ] ,
    newPostText: ''
}

type initialStateProfileType = typeof initialState

const profileReducer = (state: initialStateProfileType = initialState, action: ActionTypes) => {

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

export default profileReducer;
