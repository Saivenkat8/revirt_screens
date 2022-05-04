import React from 'react'
import styles from './button.module.css'
import typography from '../../styles/typography.module.css'



export function LoginButtonMobile({ text, style, onSubmit }) {
    return (
        <button type='button' className={`${styles.button} ${styles.loginButtonMobile} ${typography.text_style_normal3}`} style={style} onClick={onSubmit && onSubmit}>
            {text}
        </button>
    )
}

export function SignUpButtonMobile({ text, style, onSubmit }) {
    return (
        <button type='button' className={`${styles.button} ${styles.signupButtonMobile} ${typography.text_style_normal3}`} style={style} onClick={onSubmit && onSubmit}>
            {text}
        </button>
    )
}

export function CreateButton({ text, style, onSubmit }) {
    return (
        <button type='button' className={`${styles.topcreateButton} ${typography.text_style_normal4}`} style={style} onClick={onSubmit && onSubmit}>
            {text}
        </button>
    )
}

export function CreateButton2({ text, style, onSubmit }) {
    return (
        <button type='button' className={`${styles.botcreateButton} ${typography.text_style_normal4}`} style={style} onClick={onSubmit && onSubmit}>
            {text}
        </button>
    )
}