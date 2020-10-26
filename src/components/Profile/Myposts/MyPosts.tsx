import React from 'react';
import stylecss from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/store';
import  {Field, InjectedFormProps, reduxForm} from 'redux-form';


type PropsType = {
    addPost: (textMessage: string) => void
    postData: Array<PostDataType>
    newPostText: string
}

type FormPostType = {
    postMessage: string
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postElement = props.postData.map(p => <Post post={p.post} CounterLike={p.CounterLike} id={p.id} key={p.id}/>)

    const addNewPostMessage = (formData: FormPostType) => {
        if (formData.postMessage) {
            props.addPost(formData.postMessage)
        }
    }

    return (
        <div className={stylecss.postBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPostMessage}/>
            <div>
                {postElement}
            </div>
        </div>
    )
}

const AddPostMessage = (props: InjectedFormProps<FormPostType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'postMessage'} placeholder={'Input you message'}/>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormPostType>({
    form: 'post'
})(AddPostMessage)
