import React from 'react';
import styles from './Users.module.css'
import {UsersPageType} from '../../redux/store';

type UsersPropsType = {
    state: UsersPageType
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersPageType) => void
}

 export const Users = (props: UsersPropsType) => {

     // if(props.setUsers.length === 0) {
     //     props.setUsers([
     //         {
     //             id: 1,
     //             photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
     //             followed: true,
     //             fullName: 'Dmitry',
     //             status: 'I am a boss',
     //             location: {city: 'Minsk', country: 'Belarus'}
     //         },
     //         {
     //             id: 2,
     //             photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
     //             followed: false,
     //             fullName: 'Georgy',
     //             status: 'I am a student',
     //             location: {city: 'Moscow', country: 'Russia'}
     //         },
     //         {
     //             id: 3,
     //             photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
     //             followed: true,
     //             fullName: 'Alex',
     //             status: 'I am a manager',
     //             location: {city: 'London', country: 'UK'}
     //         },
     //         {
     //             id: 4,
     //             photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
     //             followed: false,
     //             fullName: 'Oleg',
     //             status: 'I am a teacher',
     //             location: {city: 'Berlin', country: 'Germany'}
     //         },
     //         {
     //             id: 5,
     //             photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTrtbQWAUbo97OQOHKopnMNwKh5lDBnlzpNw&usqp=CAU',
     //             followed: true,
     //             fullName: 'Poul',
     //             status: 'I am a artist',
     //             location: {city: 'Paris', country: 'France'}
     //         }
     //     ])
     // }

    return (
        <div>
            {props.state.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photoURL} alt="avatar"/>
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
                            <div>{u.fullName }</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    )
}
