import {ActionTypes, PostDataType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type initialStatetype = typeof initialState

 let initialState = {
     postData: [
         {id: 1, post: 'Hi, how are you?', CounterLike: 15},
         {id: 2, post: 'It\'s my first post!', CounterLike: 20}
     ],
     newPostText: ''
 }


const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): initialStatetype => {
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
