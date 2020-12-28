import React from 'react';
import styles from './Paginator.module.css'

type PaginatorPropsType = {
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    onPageChanged: (pageNumber: number) => void;
}


export const Paginator: React.FC<PaginatorPropsType> = ({pageSize,currentPage,totalUsersCount,onPageChanged}) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => {
                    return (
                        <span key={p}
                              onClick={() => {
                                  onPageChanged(p);
                              }}
                              className={currentPage === p ? styles.selectedPage : styles.page}>
                                {p}
                            </span>
                    )
                })}
            </div>
    )
}
