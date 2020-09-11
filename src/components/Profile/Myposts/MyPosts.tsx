import React from 'react';
import stylecss from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/store';


type PropsType = {
    addPost: () => void
    onPostChange: (newText: string) => void
    postData: Array<PostDataType>
    newPostText: string
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postElement = props.postData.map(p => <Post post={p.post} CounterLike={p.CounterLike} id={p.id} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let newText = newPostElement.current.value
        props.onPostChange(newText)
    }}
    return (
        <div className={stylecss.postBlock}>
            <h3>My posts</h3>
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