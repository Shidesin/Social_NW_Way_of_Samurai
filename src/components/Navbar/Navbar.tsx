import React from "react";
import stylecss from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={stylecss.nav}>
            <div className={`${stylecss.item} ${stylecss.active}`}>
                <NavLink to={'/profile'} activeClassName={stylecss.activeLink}>Profile</NavLink>
            </div>
            <div className={stylecss.item}>
                <NavLink to={'/dialogs'} activeClassName={stylecss.activeLink}>Messages</NavLink>
            </div>
            <div className={stylecss.item}>
                <NavLink to={'/news'} activeClassName={stylecss.activeLink}>News</NavLink>
            </div>
            <div className={stylecss.item}>
                <NavLink to={'/music'} activeClassName={stylecss.activeLink}>Music</NavLink>
            </div>
            <div className={stylecss.item}>
                <NavLink to={'/setting'} activeClassName={stylecss.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}