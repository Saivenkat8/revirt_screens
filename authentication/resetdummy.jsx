import React, {useState} from 'react'
import styles from './style.module.css'
import { closeNavIcon } from "../../utils"
import { useNavigate } from 'react-router-dom'
import typography from '../../styles/typography.module.css'
import { Input, ForgotButton } from "../../components"

export const Reset = () => {
    const navigate = useNavigate()
    const [userData, setUser] = useState({
        password: ''
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
                        <h2 className={`${styles.heading2} ${typography.text_style_normal1}`}>Reset password</h2>
                        <h6 className={`${styles.heading2} ${typography.text_style_normal4}`}>Set a new password for your account so you can log in and access our virtual world</h6>
                        <Input type='password' placeholder={"New Password"} value={userData.password} onChange={onChangeHandler} name='password' />
                        <Input type='password' placeholder={"Confirm new Password"} value={userData.password_confirm} onChange={onChangeHandler} name='password_confirm' />
                        <ForgotButton text='Reset Password' type='submit' />
                    </div>
                </div>
            </div>
    )
}