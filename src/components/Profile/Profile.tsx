import React from 'react';
import {MyPosts} from './Myposts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage:ProfilePageType
    addPost: (postMessageData: string) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} addPost={props.addPost}/>
        </div>
    )
}