import React from 'react';
import s from './../Dialogs.module.css'
import {MessageDataType} from '../../../redux/state';


const Message: React.FC<MessageDataType> = (props) => {

    return (
            <div>
                <img className={ s.avatars}
                     alt={'avatar'}
                     src={'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg'}
                />
                {props.message}
            </div>
    )
}

export default Message;