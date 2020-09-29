import {ActionTypes, UsersDataType} from './store';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [] as Array<UsersDataType>
}

type initialStateUsersType = typeof initialState


const usersReducer = (state= initialState , action: ActionTypes): initialStateUsersType   => {

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

export const setUsersAC = (users: Array<UsersDataType>) => {
    return {type: SET_USERS, users: users} as const
}

export default usersReducer;