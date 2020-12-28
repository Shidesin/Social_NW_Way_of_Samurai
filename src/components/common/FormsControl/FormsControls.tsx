import React from 'react'
import styles from './FormsControls.module.css'

export const TextArea = ({input, meta, ...props}:any ) => {
    const showError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${showError ? styles.error: ''}`}>
            <textarea {...input} {...props}/>
            {showError && <div>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${showError ? styles.error: ''}`}>
            <input {...input} {...props}/>
            {showError && <div>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
}
