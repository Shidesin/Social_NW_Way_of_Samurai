import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/store';
import {Redirect} from 'react-router-dom';

type DialogsType = {
    addMessage: () => void
    dialogPage: DialogPageType
    newMessageText: string
    updateNewMessageText:(newMessage: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialog = props.dialogPage.dialogData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)

    let message = props.dialogPage.messageData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        if(newMessage.current){
            props.addMessage()
        }
    }

    let onMessageChange = () => {
        if(newMessage.current){
            let newMessageText = newMessage.current.value;
            props.updateNewMessageText(newMessageText)
        }
    }

    if(!props.isAuth)return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {message}
                </div>
                <div className={s.textArea_box}>
                    <textarea
                        value={props.newMessageText}
                        ref={newMessage}
                        className={s.textaria_style}
                        placeholder={'Input you message'}
                        onChange={onMessageChange}
                        cols={95}
                    />
                    <span>
                        <button onClick={addMessage} className={s.textArea_box_button}>Send</button>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;