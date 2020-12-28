import React from 'react';
import s from './ProfileInfo.module.css'
import {GetProfileItems} from '../ProfileContainer';
import {Preloader} from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

type ProfileInfoPropsType = {
    profile: GetProfileItems
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC <ProfileInfoPropsType> = ({status,updateStatus,profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    const allContacts = Object.values(profile.contacts).filter(cont => cont !== null)
    const contact = allContacts.toString()

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    Hi! My name is {profile.fullName}
                </div>

                <img src={profile.photos.large} alt="User avatar"/>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                <div>
                    {profile.aboutMe ? `About me: ${profile.aboutMe}` : null}
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