import {ActionTypes, UsersDataType, UsersPageType} from './store';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {
            id: 1,
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
            followed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
            followed: false,
            fullName: 'Georgy',
            status: 'I am a student',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
            followed: true,
            fullName: 'Alex',
            status: 'I am a manager',
            location: {city: 'London', country: 'UK'}
        },
        {
            id: 4,
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
            followed: false,
            fullName: 'Oleg',
            status: 'I am a teacher',
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 5,
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
            followed: true,
            fullName: 'Poul',
            status: 'I am a artist',
            location: {city: 'Paris', country: 'France'}
        }
    ] as Array<UsersDataType>
}

type initialStateUsersType = typeof initialState


const usersReducer = (state = initialState, action: ActionTypes): initialStateUsersType  => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}


export const followAC = (userID: number)=> {
    console.log('work')
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    }as const
}

export const setUsersAC = (users: UsersPageType) => {
    return {type: SET_USERS, users: users.users} as const
}

export default usersReducer;