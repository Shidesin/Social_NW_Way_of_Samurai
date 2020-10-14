import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserData} from '../../redux/auth-reducer';


type MapStatePropsType = {
    isAuth: boolean
    login: string | undefined
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component <MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
        // AuthAPI.getAuthMe()
        //     .then(response => {
        //         if (response.resultCode === 0) {
        //             this.props.setAuthUserData(response.data)
        //         }
        //     })
    }

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

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer);