import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div >
            <div>
                <img className={s.img}
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                    alt=""/>
            </div>
            <div className = {s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}