import React from 'react';
import s from './ProfileInfo.module.css'
import {GetProfileItems} from '../ProfileContainer';
import {Preloader} from '../../Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: GetProfileItems
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }


    let allContacts = Object.values(props.profile.contacts).filter(cont => cont !== null)

    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="User avatar"/>
                <div>
                    Hi! My name is {props.profile.fullName}
                </div>
                <div>
                     {props.profile.aboutMe? `About me: ${props.profile.aboutMe}`: null}
                </div>

                <div>
                    You can contact me through:
                    <div>
                        {allContacts.map(c => <div><a href={`${c}`}>{c}</a></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}