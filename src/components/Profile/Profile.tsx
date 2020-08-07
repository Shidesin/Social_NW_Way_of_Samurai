import React from 'react';
import {MyPosts} from './Myposts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType, ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage:ProfilePageType
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    )
}