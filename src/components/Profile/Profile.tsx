import React from 'react';
import {MyPosts} from './Myposts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage:ProfilePageType
    addPost: (postMessageData: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}