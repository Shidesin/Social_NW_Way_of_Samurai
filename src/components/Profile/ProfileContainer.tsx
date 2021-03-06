import {AppStateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {photosType} from '../../redux/store';
import {getProfileData, getStatus, updateStatus} from '../../redux/ProfilePage-Reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export type GetProfileItems = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: photosType
}

type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


type MapStatePropsType = {
    profile: GetProfileItems
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfileData: (userId: string) => void
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string,
}

class ProfileContainer extends React.Component <MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            let myId = this.props.authorizedUserId ? this.props.authorizedUserId : ''
            userId = myId.toString()
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfileData(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileData,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)