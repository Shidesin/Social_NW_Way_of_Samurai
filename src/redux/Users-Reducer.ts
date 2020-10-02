import {ActionTypes, UsersDataType, UsersPageType} from './store';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_iS_FETCHING = 'TOGGLE_iS_FETCHING'


let initialState: UsersPageType = {
    users: [] as Array<UsersDataType>,
    totalUsersCount: 0,
    pageSize: 25,
    currentPage: 1,
    isFetching: false,
}

// type initialStateUsersType = typeof initialState


const usersReducer = (state: UsersPageType = initialState , action: ActionTypes): UsersPageType   => {

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
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_iS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const follow = (userID: number)=> {
    return {type: FOLLOW, userID: userID} as const
}

export const unFollow = (userID: number) => {
    return {type: UNFOLLOW, userID: userID}as const
}

export const setUsers = (users: Array<UsersDataType>) => {
    return {type: SET_USERS, users: users} as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalCount} as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: pageNumber} as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_iS_FETCHING, isFetching} as const
}

export default usersReducer;