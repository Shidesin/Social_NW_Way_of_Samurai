import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


type FormDataType = {
    login: string
    Password: string
    rememberMe: boolean
}

function LoginForm(props: InjectedFormProps<FormDataType>) {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'login'} placeholder={'Login'} component={'input'} type="text"/>
                </div>
                <div>
                    <Field name={'Password'} placeholder={'Password'} component={'input'} type="text"/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={'input'} type='checkbox'/> remember me
                </div>
                <div>
                    <button>LogIn</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

function Login() {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;