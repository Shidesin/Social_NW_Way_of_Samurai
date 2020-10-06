import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DataMeType, GetAuthItemsType, setAuthUserData} from '../../redux/auth-reducer';


type MapStatePropsType = {
    isAuth: boolean
    login: string | undefined
}

type MapDispatchPropsType = {
    setAuthUserData: (data: DataMeType) => void
}

class HeaderContainer extends React.Component <MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        axios.get<GetAuthItemsType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
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

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);