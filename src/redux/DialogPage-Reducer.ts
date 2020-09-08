import {ActionTypes, DialogPageType, MessageDataType} from './store';

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
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'}
    ],
    newMessageText: ''
}

export type initialStatetype = typeof initialState

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) : initialStatetype=> {
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