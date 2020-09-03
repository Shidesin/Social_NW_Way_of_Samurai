import {ActionTypes, DialogPageType, MessageDataType} from './state';


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageDataType = {
                id: 3,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
};
export const onMessageChangeActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const
};


export default dialogsReducer;