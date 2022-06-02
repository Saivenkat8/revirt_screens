import React from 'react'
import styles from './style.module.css'
import { closeNavIcon } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { OTPInput, VerifyButton } from "../../components"

export const Verify = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/forget') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <h2 className={`${styles.heading} ${typography.text_style_normal1}`}>Enter 4 digit one time password</h2>
                        <h6 className={`${styles.heading} ${typography.text_style_normal4}`}>Enter 4 digit one time password that you recieved on your email</h6>
                        <OTPInput/>
                        <VerifyButton text='Send OTP' type='submit' />
                    </div>
                </div>
            </div>
    )
}