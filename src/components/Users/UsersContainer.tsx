import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {UsersDataType} from '../../redux/store';
import {follow, getUsers, setCurrentPage, unFollow} from '../../redux/Users-Reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getStateUsersSelector,
    getTotalUsersCount
} from '../../redux/users-selectors';


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
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize)
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
        state: getStateUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state) ,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)        ,
        followingProgress:getFollowingProgress(state)
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
