import {AddPostActionCreator, setStatus, setUserProfile} from './ProfilePage-Reducer';
import  {addMessageActionCreator} from './DialogPage-Reducer';
import {
    followSuccess,
    setCurrentPage,
    setFollowingProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowSuccess
} from './Users-Reducer';
import {setAuthUserData} from './auth-reducer';

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
    followingProgress: number[]
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
    status: string
}

export type ActionTypes =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof AddPostActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof followSuccess>|
    ReturnType<typeof unFollowSuccess>|
    ReturnType<typeof setUsers>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setFollowingProgress> |
    ReturnType<typeof setStatus>
