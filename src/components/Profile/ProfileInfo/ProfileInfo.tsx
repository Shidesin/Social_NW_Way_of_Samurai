import React from 'react';
import s from './ProfileInfo.module.css'
import {GetProfileItems} from '../ProfileContainer';
import {Preloader} from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

type ProfileInfoPropsType = {
    profile: GetProfileItems
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }


    let allContacts = Object.values(props.profile.contacts).filter(cont => cont !== null)
    let contact = allContacts.toString()
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="User avatar"/>
                <ProfileStatus status={'Ну нихуясе!'}/>
                <div>
                    Hi! My name is {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe ? `About me: ${props.profile.aboutMe}` : null}
                </div>

                <div>
                    {contact === '' ? null :'My other contact:'}
                    <div>
                        {contact === '' ? null : allContacts.map(c => <div><a key={c} href={`${c}`}>{c}</a></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}