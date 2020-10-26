import {ActionTypes} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ] ,
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'}
    ] ,
}

type initialStateDialogType = typeof initialState;

const dialogsReducer = (state: initialStateDialogType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessageBody = action.newMessage
            return {
                ...state,
                messageData: [...state.messageData, {id: 3, message: newMessageBody}],
                newMessageText: ''
            };
        }
        default:
            return state;
    }
};


export const addMessageActionCreator = (newMessage: string) => {
    return {type: ADD_MESSAGE, newMessage} as const
};


export default dialogsReducer;