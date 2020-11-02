import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserData, logOutTC} from '../../redux/auth-reducer';


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logOutTC: () => void
}

class HeaderContainer extends React.Component <MapStatePropsType & MapDispatchPropsType> {


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export default connect(MapStateToProps, {logOutTC})(HeaderContainer);