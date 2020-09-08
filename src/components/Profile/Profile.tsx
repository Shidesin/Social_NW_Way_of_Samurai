import React from 'react';
import {MyPosts} from './Myposts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/store';

type PropsType = {
    profilePage: ProfilePageType
    // addPost: (postMessageData: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}