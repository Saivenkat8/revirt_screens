import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import typography from '../../styles/typography.module.css'
import { Input, ForgotButton } from "../../components"
import { closeNavIcon } from "../../utils"
import useStore from "../../store"

export const Forget = () => {
    const navigate = useNavigate()
    const { setForget, setIsSnackbarVisible } = useStore()
    const [userForgot, setForgot] = useState({
        email: '',
        redirecturl: 'http://localhost:3000/verify'
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForgot({ ...userForgot, [name]: value });
    }

    const forgotHandler = async (e) => {
        e.preventDefault();
        if (!userForgot.email) {
            setIsSnackbarVisible({ variant: 'error', text: 'Please Fill the email field', type: 'md', isSnackbarVisible: true })
            return
        } else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(userForgot.email)) {
            setIsSnackbarVisible({ variant: 'error', text: 'Email is invalid', type: 'md', isSnackbarVisible: true })
            return
        } else {
            const { loginSuccess, message } = await setForget(userForgot)
            if (loginSuccess) {
                setTimeout(() => {
                    setIsSnackbarVisible({ variant: 'success', text: 'Login success', type: 'md', isSnackbarVisible: true })
                    navigate('/verify')
                }, 1000)
            } else {
                setIsSnackbarVisible({ variant: 'error', text: message, type: 'md', isSnackbarVisible: true })
            }
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => { navigate('/login') }}>{closeNavIcon}</button>
            <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <h2 className={`${styles.heading2} ${typography.text_style_normal1}`}>Recover Password</h2>
                        <h6 className={`${styles.heading2} ${typography.text_style_normal4}`}>Enter your email for the verification process. We will send the 4 digit one time password to your email.</h6>
                        <form onSubmit={forgotHandler}>
                            <Input type='email' placeholder={"Email"} value={userForgot.email} onChange={onChangeHandler} name='email' />
                            <ForgotButton text='Send OTP' type='submit' onSubmit={forgotHandler} />
                        </form>
                </div>
            </div>
        </div>
    )
}