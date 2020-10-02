import {AddPostActionCreator, onPostChangeActionCreator, setUserProfile} from './ProfilePage-Reducer';
import  {addMessageActionCreator, onMessageChangeActionCreator} from './DialogPage-Reducer';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from './Users-Reducer';

export type MessageDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    post: string
    CounterLike: number
}

export type DialogDataType = {
    id: number
    name: string
    avatar: string
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

export type UsersPageType = {
    users: Array<UsersDataType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
export type UsersDataType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: photosType
}
export type photosType = {
    small: string
    large: string
}


export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: any
}

export type ActionTypes =
    ReturnType<typeof AddPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof onMessageChangeActionCreator>|
    ReturnType<typeof follow>|
    ReturnType<typeof unFollow>|
    ReturnType<typeof setUsers>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile>

// type StoreType = {
//     _state: RootStateType;
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     subscribe: (observer: () => void) => void
//     dispatch: (action:ActionTypes) => void
// }
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, post: 'Hi, how are you?', CounterLike: 15},
//                 {id: 2, post: 'It\'s my first post!', CounterLike: 20}
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogData: [
//                 {
//                     id: 1,
//                     name: 'Dimych',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'
//                 },
//                 {
//                     id: 2,
//                     name: 'Andrey',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'
//                 },
//                 {
//                     id: 3,
//                     name: 'Sveta',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'
//                 }
//             ],
//             messageData: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra'},
//                 {id: 3, message: 'Yo'}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {
//             friendsData: [
//                 {
//                     id: 1,
//                     name: 'Dimych',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'
//                 },
//                 {
//                     id: 2,
//                     name: 'Andrey',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'
//                 },
//                 {
//                     id: 3,
//                     name: 'Sveta',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'
//                 }
//             ]
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage,action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage,action);
//         this._callSubscriber()
//     }
// }

