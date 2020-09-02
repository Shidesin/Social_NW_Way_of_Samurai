import React from 'react';
import stylecss from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionTypes, AddPostActionCreator, onPostChangeActionCreator, PostDataType} from '../../../redux/state';

type PropsType = {
    dispatch: (action: ActionTypes ) => void
    postData: Array<PostDataType>
    newPostText: string
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postElement = props.postData.map(p => <Post post={p.post} CounterLike={p.CounterLike} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(AddPostActionCreator())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let newText = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(newText))
    }}
    return (
        <div className={stylecss.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                        cols={95}
                    />
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