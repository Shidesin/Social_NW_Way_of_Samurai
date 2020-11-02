import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {UsersDataType} from '../../redux/store';
import {
    follow, getUsers,
    setCurrentPage,
    unFollow
} from '../../redux/Users-Reducer';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type UsersPropsType = {
    state: Array<UsersDataType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    followingProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}
export type GetUsersItems = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.state}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                followingProgress={this.props.followingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirectComponent,
    connect(
        mapStateToProps, {
            follow,
            unFollow,
            setCurrentPage,
            getUsers,
        })
)(UsersContainer)
