import React from 'react';
import { Field, reduxForm } from 'redux-form'

function LoginForm(props: any) {
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

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login() {
    const onSubmit = (formData: any) => {
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