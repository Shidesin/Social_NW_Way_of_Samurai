import React from 'react';
import stylecss from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {sidebarType} from '../../redux/state';
import s from './../Dialogs/Dialogs.module.css'

type PropsType = {
    friends: sidebarType
}

export const Navbar: React.FC<PropsType> = (props) => {

    let friends = props.friends.friendsData.map(f =>
        <span  className={s.friends_box}>
            <div>
                <img className={s.avatars_friend} src={f.avatar} alt="avatar"/>
            </div>
            {f.name}
        </span>)

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
            <div>
                <h3>Friends</h3>
                <div >
                    {friends}
                </div>

            </div>
        </nav>
    )
}