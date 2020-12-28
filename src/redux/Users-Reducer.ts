import {ActionTypes, UsersDataType, UsersPageType} from './store';
import {UserAPI} from '../api/api';
import {ThunkDispatchType, ThunkType} from './auth-reducer';
import {updateObjectInArray} from '../utils/object-helpers';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_iS_FETCHING = 'TOGGLE_iS_FETCHING'
const TOGGLE_iS_FOLLOWING_PROGRESS = 'TOGGLE_iS_FOLLOWING_PROGRESS'


let initialState: UsersPageType = {
    users: [] as Array<UsersDataType>,
    totalUsersCount: 0,
    pageSize: 25,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

// type initialStateUsersType = typeof initialState


const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                 users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_iS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_iS_FOLLOWING_PROGRESS:
            return <UsersPageType>{
                ...state,
                followingProgress: action.isFollowing
                    ? [...state.followingProgress, action.id]
                    : [state.followingProgress.filter(id => id !== action.id),]
            }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID: userID} as const)


export const unFollowSuccess = (userID: number) => ({type: UNFOLLOW, userID: userID} as const)


export const setUsers = (users: Array<UsersDataType>) => ({type: SET_USERS, users: users} as const)

export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount} as const)

export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber} as const)

export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_iS_FETCHING, isFetching} as const)

export const setFollowingProgress = (isFollowing: boolean, id: number) => ({
    type: TOGGLE_iS_FOLLOWING_PROGRESS,
    isFollowing,
    id
} as const)


export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(setIsFetching(true))
        let response = await UserAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))

    }
}

const followUnfollowFlow = async (dispatch: ThunkDispatchType, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingProgress(true, id));
    let response = await apiMethod(id)
    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setFollowingProgress(false, id))
}


export const follow = (id: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        let apiMethod = UserAPI.postUser.bind(UserAPI)
        followUnfollowFlow(dispatch, id, apiMethod, followSuccess)
    }
}

export const unFollow = (id: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        let apiMethod = UserAPI.deleteUser.bind(UserAPI)
        followUnfollowFlow(dispatch, id, apiMethod, unFollowSuccess)

    }
}

export default usersReducer;