import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {photosType} from '../../redux/store';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/ProfilePage-Reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ProfileAPI} from '../../api/api';


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
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type MapStatePropsType = {
    profile: GetProfileItems
}

type MapDispatchPropsType = {
    setUserProfile: (profile: GetProfileItems) => void
}

type PathParamsType = {
    userId: string,
}


class ProfileContainer extends React.Component <MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '8521' //my ID
        }
        ProfileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);