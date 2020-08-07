import React from "react";
import stylecss from './Post.module.css'

type PostDataType = {
    id: number
    post: string
    CounterLike: number
}

export const Post: React.FC<PostDataType> = (props) => {
    return (
        <div className='posts'>
            <div className={stylecss.item}>
                <img
                    src="https://newsterra.net/upload/catalog/ru/o-chem-govorit-avatarka-profilya-obyasnyayut-psihologi_5ef1a814b8d06.jpg"
                    alt="avatar"/>
                {props.post}
                    <div>
                        <button>Like</button><span>{props.CounterLike}</span>
                    </div>
            </div>
        </div>
    )
}