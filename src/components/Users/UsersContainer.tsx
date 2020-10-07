import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {UsersDataType} from '../../redux/store';
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unFollow} from '../../redux/Users-Reducer';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';
import {UserAPI} from '../../api/api';


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
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        UserAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
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


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching
})(UsersContainer);