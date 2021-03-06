import React from 'react';
import {NavLink} from 'react-router-dom';
import stylecss from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOutTC: () => void
}

export function Header(props: HeaderPropsType) {

    return (
        <header className={stylecss.header}>
            <img src="https://image.freepik.com/free-vector/abstract-logo-two-versions_23-2148455881.jpg" alt=""/>
            <div className={stylecss.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOutTC} >Log Out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
