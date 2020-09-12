import {Users} from './Users';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ActionTypes, UsersPageType} from '../../redux/store';
import {followAC, setUsersAC, unFollowAC} from '../../redux/Users-Reducer';


let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.usersPage
    }
}


let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    console.log('Dispatch')
    return {
        follow: (userID: number) => {
            console.log('followAC')
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            console.log('unFollowAC')
            dispatch(unFollowAC(userID))
        },
        setUsers: (users:UsersPageType) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);