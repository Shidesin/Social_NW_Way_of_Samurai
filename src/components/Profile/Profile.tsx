import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';
import {AppStateType} from '../../redux/redux-store';
import {ActionTypes} from '../../redux/store';


export const Profile: React.FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}