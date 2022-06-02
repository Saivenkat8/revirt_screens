import React from 'react'
import styles from './style.module.css'
import { closeNavIcon, messagesuccess } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { SignUpButton } from "../../components"

export const Verifyemailsuccess = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            {messagesuccess}
                        </div>
                        <h2 className={`${styles.heading4} ${typography.text_style_medium4}`}>Verified successfully!</h2>
                        <h6 className={`${styles.heading3} ${typography.text_style_normal4}`}>Your Email Address has been verified succesfully!</h6>
                        <SignUpButton text='Log In to use our virtual world' type='submit'/>
                    </div>
                </div>
            </div>
    )
}