import React from 'react';
import s from './../Dialogs.module.css'
import {MessageDataType} from '../../../redux/state';


const Message: React.FC<MessageDataType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;