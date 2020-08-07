import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/state';

type DialogsType ={
    dialogPage: DialogPageType
}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialog = props.dialogPage.dialogData.map(d => <DialogItem id={d.id} name={d.name}/>)

    let message = props.dialogPage.messageData.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;