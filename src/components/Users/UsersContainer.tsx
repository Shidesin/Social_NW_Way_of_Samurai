import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ActionTypes, UsersDataType} from '../../redux/store';
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from '../../redux/Users-Reducer';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';


type UsersPropsType = {
    state: Array<UsersDataType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    setIsFetching: (isFetching: boolean) => void
}
export type GetUsersItems = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<GetUsersItems>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get<GetUsersItems>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching? <Preloader /> : null}
            <Users users={this.props.state}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userID: number) => {
            console.log('followAC')
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            console.log('unFollowAC')
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UsersDataType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);