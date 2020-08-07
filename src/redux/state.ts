export type MessageDataType = {
    id: number
    message: string
}
export type DialogDataType = {
    id: number
    name: string
}
export type PostDataType = {
    id: number
    post: string
    CounterLike: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}
export type DialogPageType ={
    dialogData: Array<DialogDataType>
    messageData: Array<MessageDataType>
}
export type RootStateType ={
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

let state: RootStateType = {
    profilePage :{
        postData:[
            {id: 1, post: 'Hi, how are you?', CounterLike: 15},
            {id: 2, post: 'It\'s my first post!', CounterLike: 20}
        ]
    },
    dialogPage: {
        dialogData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'}
        ]
    }
};

export default state;