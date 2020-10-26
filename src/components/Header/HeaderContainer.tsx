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
    getAuthUserData: (isAuth: boolean) => void
    logOutTC: () => void
}

class HeaderContainer extends React.Component <MapStatePropsType & MapDispatchPropsType> {

    // componentDidMount() {
    //     this.props.getAuthUserData(false)
    // }

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

export default connect(MapStateToProps, {getAuthUserData, logOutTC})(HeaderContainer);