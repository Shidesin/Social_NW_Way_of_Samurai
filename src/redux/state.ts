export type MessageDataType = {
    id: number
    message: string
}
export type DialogDataType = {
    id: number
    name: string
    avatar: string
}
export type PostDataType = {
    id: number
    post: string
    CounterLike: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogPageType = {
    dialogData: Array<DialogDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type friendsDataType = {
    id: number
    name: string
    avatar: string
}
export type sidebarType = {
    friendsData: Array<friendsDataType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: sidebarType
}
export type StoreType = {
    _state: RootStateType;
    _callSubscriber: () => void
    getState: () => RootStateType
    sudscribe: (observer: () => void) => void
    dispatch: (action:ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof AddPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof onMessageChangeActionCreator>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const onMessageChangeActionCreator = (text: string) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hi, how are you?', CounterLike: 15},
                {id: 2, post: 'It\'s my first post!', CounterLike: 20}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sidebar: {
            friendsData: [
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
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },

    sudscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            debugger
            let newPost: PostDataType = {
                id: 5,
                post: this._state.profilePage.newPostText ,
                CounterLike: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            debugger
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            debugger
            let newMessage: MessageDataType = {
                id: 3,
                message: this._state.dialogPage.newMessageText
            }
            this._state.dialogPage.messageData.push(newMessage)
            this._state.dialogPage.newMessageText = ''
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            debugger
            this._state.dialogPage.newMessageText = action.newMessage;
            this._callSubscriber();
        }

    }
    // addPost () {
    //     let newPost: PostDataType  = {
    //         id: 5,
    //         post: this._state.profilePage.newPostText,
    //         CounterLike: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // updateNewPostText (newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // addMessage  () {
    //     let newMessage: MessageDataType = {
    //         id: 3,
    //         message: this._state.dialogPage.newMessageText
    //     }
    //     this._state.dialogPage.messageData.push(newMessage)
    //     this._state.dialogPage.newMessageText = ''
    //     this._callSubscriber(this._state);
    // },

    // updateNewMessageText (newMessage: string) {
    //     this._state.dialogPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
}

export default store;