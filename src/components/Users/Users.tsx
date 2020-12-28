import React from 'react';
import {UsersDataType} from '../../redux/store';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

type UsersPropsType = {
    users: Array<UsersDataType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onPageChanged: (pageNumber: number) => void;
    followingProgress: number[]
}


export const Users: React.FC<UsersPropsType> = ({onPageChanged,totalUsersCount,currentPage,pageSize,users,followingProgress,unFollow, follow}) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
            {
                users.map(u =>
                    <User key={u.id} unFollow={unFollow} follow={follow} user={u} followingProgress={followingProgress} />
                )}
        </div>
    );
}
