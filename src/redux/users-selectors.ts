import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

const getStateUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getStateUsersSelector = createSelector(getStateUsers, (users) => {
    return users.filter(u => true)
})


export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching =(state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state:AppStateType) => {
    return state.usersPage.followingProgress
}

