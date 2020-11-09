import React from 'react';
import s from './ProfileInfo.module.css'
import {GetProfileItems} from '../ProfileContainer';
import {Preloader} from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

type ProfileInfoPropsType = {
    profile: GetProfileItems
    status: string
    updateStatus: (status: string) => void
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
                <div>
                    Hi! My name is {props.profile.fullName}
                </div>

                <img src={props.profile.photos.large} alt="User avatar"/>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}

                <div>
                    {props.profile.aboutMe ? `About me: ${props.profile.aboutMe}` : null}
                </div>

                <div>
                    {contact === '' ? null :'My other contact:'}
                    <div>
                        {contact === '' ? null : allContacts.map(c => <div key={c}><a href={`${c}`}>{c}</a></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}