import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_avatar.jpg';
import {UsersDataType} from '../../redux/store';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    followingProgress: number[]
}


export const User: React.FC<UserPropsType> = ({user, followingProgress, unFollow, follow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            className={styles.userPhoto}
                            src={user.photos.small !== null ? user.photos.small : userPhoto}
                            alt="avatar"
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingProgress.some(id => id === user.id)}
                            onClick={() => {
                                unFollow(user.id)
                            }}>UnFollow</button>
                        : <button
                            disabled={followingProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>

        </div>
    )
}
