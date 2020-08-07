import React from 'react';
import stylecss from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';

type PropsType = {
    postData: Array<PostDataType>
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postElement = props.postData.map( p => <Post post={p.post} CounterLike={p.CounterLike} id={p.id}/>)

    return (
        <div className={stylecss.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}