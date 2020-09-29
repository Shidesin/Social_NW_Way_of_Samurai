import React from 'react';
import styles from './Users.module.css'
import {UsersDataType, UsersPageType} from '../../redux/store';
import axios from 'axios'
import {GetUsersItems} from './UsersC';

type UsersPropsType = {
    state: Array<UsersDataType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersDataType>) => void
}

 export const Users = (props: UsersPropsType) => {

    if (props.state.length === 0){
        axios.get<GetUsersItems>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)

            })
    }

    return (
        <div>
            {props.state.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photos.small} alt="avatar"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={ () => {props.unFollow(u.id)} }>UnFollow</button> :
                                <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name }</div>
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
    )
}
