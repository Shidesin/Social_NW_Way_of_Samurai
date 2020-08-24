import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/state';

type DialogsType = {
    dialogPage: DialogPageType
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialog = props.dialogPage.dialogData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)

    let message = props.dialogPage.messageData.map(m => <Message id={m.id} message={m.message}/>)
    let myMessage = props.dialogPage.messageData.map(m => m.id % 3 === 0 ?
        <Message id={m.id} message={m.message} classMsg={'my_message'}/> : null)

    let newMessage = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newMessage.current?.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {message}
                    {myMessage}
                </div>
                <div className={s.textArea_box}>
                    <textarea ref={newMessage} className={s.textaria_style} placeholder={'Input you message'}
                              cols={95}>
                    </textarea>
                    <span>
                        <button onClick={addPost} className={s.textArea_box_button}>Send</button>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;