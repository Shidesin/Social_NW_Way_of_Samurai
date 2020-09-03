import {ActionTypes, PostDataType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: 5,
                post: state.newPostText ,
                CounterLike: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const AddPostActionCreator = () => {
    return {
        type:ADD_POST
    } as const
}

export const onPostChangeActionCreator =(text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }as const
}

export default profileReducer;
