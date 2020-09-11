import {ActionTypes, DialogDataType, MessageDataType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogData: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'
        }
    ] as Array<DialogDataType>,
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'}
    ] as Array<MessageDataType>,
    newMessageText: '' as string
}

export type initialStateDialogType = typeof initialState;

const dialogsReducer = (state: initialStateDialogType = initialState, action: ActionTypes): initialStateDialogType => {


    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessageBody = state.newMessageText
            return {
                ...state,
                messageData: [...state.messageData, {id: 3, message: newMessageBody}],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newMessage};
        }
        default:
            return state;
    }
};

type onMessageChangeActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newMessage: string
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
};
export const onMessageChangeActionCreator = (text: string): onMessageChangeActionCreatorType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const
};


export default dialogsReducer;