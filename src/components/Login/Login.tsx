import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../FormsControl/FormsControls';
import {maxLengthCreator, requiredField} from '../../utils/validator';
import { connect } from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from './../FormsControl/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength = maxLengthCreator(50)

function LoginForm(props: InjectedFormProps<FormDataType>) {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} placeholder={'Login'} component={Input} validate={[requiredField, maxLength]} type="text"/>
                </div>
                <div>
                    <Field name={'password'} placeholder={'password'} component={Input} validate={[requiredField, maxLength]} type="password"/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={'input'} type='checkbox'/> remember me
                </div>
                { props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>LogIn</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


type MapState = {
    isAuth: boolean
}

type MapDispatch = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}




function Login(props:MapState & MapDispatch) {
    const onSubmit = (formData: FormDataType) => {
        console.log({...formData})
        const {email,password,rememberMe} = formData
        props.loginTC(email,password,rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(MapStateToProps,{loginTC})(Login);