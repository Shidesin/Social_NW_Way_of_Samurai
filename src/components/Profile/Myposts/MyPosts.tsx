import React from 'react';
import stylecss from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';

type PropsType = {
    postData: Array<PostDataType>
    addPost: (postMessageData: string) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postElement = props.postData.map(p => <Post post={p.post} CounterLike={p.CounterLike} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        debugger;
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={stylecss.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}