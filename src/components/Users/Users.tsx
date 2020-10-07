import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_avatar.jpg';
import {UsersDataType} from '../../redux/store';
import {NavLink} from 'react-router-dom';
import {UserAPI} from '../../api/api';

type UsersPropsType = {
    users: Array<UsersDataType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onPageChanged: (pageNumber: number) => void;
    setFollowingProgress: (isFollowing:boolean, id: number) => void
    followingProgress: number[]
}

export type GetFollowItems = {
    data: object
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const Users = (props: UsersPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span key={p}
                              onClick={() => {
                                  props.onPageChanged(p);
                              }}
                              className={props.currentPage === p ? styles.selectedPage : styles.page}>
                                {p}
                            </span>
                    )
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}><img className={styles.userPhoto}
                                                                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                                  alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowingProgress(true, u.id)
                                    UserAPI.deleteUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id);
                                            }
                                            props.setFollowingProgress(false, u.id)
                                        });


                                }}>UnFollow</button>
                                :

                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowingProgress(true, u.id)
                                    UserAPI.postUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.setFollowingProgress(false, u.id)
                                        });

                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>
                )}
        </div>
    );
}
