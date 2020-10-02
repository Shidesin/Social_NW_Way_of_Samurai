import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';
import {GetProfileItems} from './ProfileContainer';

type ProfilePropsType = {
    profile: any //GetProfileItems
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}