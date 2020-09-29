import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_avatar.jpg';
import {UsersDataType} from '../../redux/store';

type UsersPropsType = {
    users: Array<UsersDataType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onPageChanged: (pageNumber: number) => void;
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
                            <img className={styles.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>
                )}
        </div>
    );


}
