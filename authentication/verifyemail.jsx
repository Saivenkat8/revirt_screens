import React from 'react'
import styles from './style.module.css'
import { closeNavIcon, messagecaution } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { VerifyemailButton } from "../../components"

export const Verifyemail = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            {messagecaution}
                        </div>
                        <h2 className={`${styles.heading3} ${typography.text_style_normal1}`}>Verify your email address</h2>
                        <h6 className={`${styles.heading3} ${typography.text_style_normal4}`}>To complete your sign Up process please verify your email address, We will send a link for verification to your email address.</h6>
                        <VerifyemailButton text='Send verification link' type='submit'/>
                    </div>
                </div>
            </div>
    )
}