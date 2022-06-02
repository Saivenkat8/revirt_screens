import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import typography from '../../styles/typography.module.css'
import { Input, ResetButton } from "../../components"
import { closeNavIcon } from "../../utils"
import useStore from "../../store"

export const Reset = () => {
    const navigate = useNavigate()
    const { setIsSnackbarVisible } = useStore()
    const [password, setPassword] = useState({
        new_password: '',
        new_password_confirm: ''
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPassword({ ...password, [name]: value });
    }

    const resetHandler = async (e) => {
        e.preventDefault();
        if (!password.new_password || !password.new_password_confirm) {
            setIsSnackbarVisible({ variant: 'error', text: 'All fields are required', type: 'md', isSnackbarVisible: true })
            return
        }
        else if(password.new_password !== password.new_password_confirm) {
            setIsSnackbarVisible({ variant: 'error', text: 'Passwords must match', type: 'md', isSnackbarVisible: true })
            return
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <h2 className={`${styles.heading2} ${typography.text_style_normal1}`}>Reset password</h2>
                    <h6 className={`${styles.heading2} ${typography.text_style_normal4}`}>Set a new password for your account so you can log in and access our virtual world</h6>
                    <form onSubmit={resetHandler}>
                        <Input type='password' placeholder={"New Password"} value={password.new_password} onChange={onChangeHandler} name='new_password' />
                        <Input type='password' placeholder={"Confirm new Password"} value={password.new_password_confirm} onChange={onChangeHandler} name='new_password_confirm' />
                        <ResetButton text='Reset Password' type='submit' onSubmit={resetHandler} />
                    </form>
                </div>
            </div>
        </div>
    )
}