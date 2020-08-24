import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogDataType} from '../../../redux/state';


const DialogItem: React.FC<DialogDataType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <img className={s.avatars} alt={'avatar'} src={props.avatar}/>
            <span><NavLink className={s.dialog} to={path}>{props.name}</NavLink></span>
        </div>
    )
}

export default DialogItem;