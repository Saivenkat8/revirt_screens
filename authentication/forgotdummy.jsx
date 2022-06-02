import React, {useState} from 'react'
import styles from './style.module.css'
import { closeNavIcon } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { Input, ForgotButton } from "../../components"

export const Forget = () => {
    const navigate = useNavigate()
    const [userData, setUser] = useState({
        email: ''
    })
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...userData, [name]: value });
    }
    return (
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <h2 className={`${styles.heading2} ${typography.text_style_normal1}`}>Recover Password</h2>
                        <h6 className={`${styles.heading2} ${typography.text_style_normal4}`}>Enter your email for the verification process. We will send the 4 digit one time password to your email.</h6>
                        <Input type='email' placeholder={"Email"} value={userData.email} onChange={onChangeHandler} name='email' />
                        <ForgotButton text='Send OTP' type='submit' />
                    </div>
                </div>
            </div>
    )
}