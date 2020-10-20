import axios from 'axios';
import {GetUsersItems} from '../components/Users/UsersContainer';
import {GetProfileItems} from '../components/Profile/ProfileContainer';
import {GetAuthItemsType} from '../redux/auth-reducer';

export type GetFollowItems = {
    data: object
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}



const instance = axios.create(
    {
        withCredentials: true,
        headers: {
            'API-KEY': '8ec03155-8ce5-469f-8e80-164464cd89ef'
        },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
)

export const UserAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUser(id: number) {
        return instance.delete<GetFollowItems>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postUser(id: number) {
        return instance.post<GetFollowItems>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileAPI = {
    getProfile(userId: string) {
        return instance.get<GetProfileItems>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                debugger
                return response.data
            })
    },
    updateProfileStatus(status: string) {
        return instance.put<GetFollowItems>(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    }
}


export const AuthAPI = {
    getAuthMe() {
        return instance.get<GetAuthItemsType>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}