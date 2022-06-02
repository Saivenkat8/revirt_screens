import React from 'react'
import styles from './style.module.css'
import { closeNavIcon, messagesent } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { VerifyemailButton } from "../../components"

export const Verifyemailsent = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            {messagesent}
                        </div>
                        <h2 className={`${styles.heading3} ${typography.text_style_normal1}`}>Verification link has been sent</h2>
                        <h6 className={`${styles.heading3} ${typography.text_style_normal4}`}>We have sent the verification link to your email id which will expire in 24hours, please click on the link to verify your email id.</h6>
                        <VerifyemailButton text='Resend verification link' type='submit'/>
                    </div>
                </div>
            </div>
    )
}