import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextArea} from '../FormsControl/FormsControls';
import {maxLengthCreator, requiredField} from '../../utils/validator';


type DialogsType = {
    addMessage: (message: string) => void
    dialogPage: DialogPageType
    newMessageText: string
}

export type FormMessageType = {
    MessageText: string
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialog = props.dialogPage.dialogData.map((d,index) => <DialogItem key={index} id={d.id} name={d.name}
                                                                  avatar={d.avatar}/>)

    let message = props.dialogPage.messageData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const addNewMessage = (formData: FormMessageType) => {
        if (formData.MessageText) {
            props.addMessage(formData.MessageText)
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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLengthMessage = maxLengthCreator(50)

const AddMessage = (props: InjectedFormProps<FormMessageType>) => {
        return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea_box}>
                <Field component={TextArea} name={'MessageText'} placeholder={'Input you message'} validate={[requiredField, maxLengthMessage]}/>
                <button className={s.textArea_box_button}>Send</button>
            </div>
        </form>
    )
}


const AddMessageReduxForm = reduxForm<FormMessageType>({
    form: 'dialogMessage'
})(AddMessage)

export default Dialogs;