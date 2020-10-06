import React from 'react';
import {NavLink} from 'react-router-dom';
import stylecss from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | undefined
}

export function Header(props: HeaderPropsType) {
    debugger
    return (
        <header className={stylecss.header}>
            <img src="https://image.freepik.com/free-vector/abstract-logo-two-versions_23-2148455881.jpg" alt=""/>
            <div className={stylecss.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
