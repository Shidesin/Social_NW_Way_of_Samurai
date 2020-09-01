import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionTypes, DialogPageType} from '../../redux/state';

type DialogsType = {
    dialogPage: DialogPageType
    //addMessage: (messageData: string) => void
    //updateNewMessageText: (newMessage: string) => void
    newMessageText: string
    dispatch: (action: ActionTypes ) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialog = props.dialogPage.dialogData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)

    let message = props.dialogPage.messageData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        debugger
        if(newMessage.current){
            props.dispatch({type: 'ADD-MESSAGE'})
        }
    }

    let onMessageChange = () => {
        debugger
        if(newMessage.current){
            props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage.current.value})
        }
    }

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