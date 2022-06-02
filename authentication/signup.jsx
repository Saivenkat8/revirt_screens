import React, { useState, useEffect } from "react"
import { useNavigate, NavLink, useLocation } from "react-router-dom"
import ReactGA from 'react-ga'
import styles from './style.module.css'
import typography from '../../styles/typography.module.css'
import { Input, LoginButton, SignUpButton } from "../../components"
import { closeNavIcon } from "../../utils"
import useStore from "../../store"
import User from "../../utils/helpers/user"

export const Signup = () => {
    // const { setSignUp, setIsSnackbarVisible } = useStore()
    const setSignUp = useStore(state => state.setSignUp)
    const setIsSnackbarVisible = useStore(state => state.setIsSnackbarVisible)
    const setUserInfo = useStore(state => state.setUser)
    const navigate = useNavigate()
    const { state } = useLocation()
    const { isAuthenticated } = new User()
    const [userData, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const isAuth = isAuthenticated()

    useEffect(() => {
        if (isAuth) {
            navigate('/home')
        }
    }, [])

    useEffect(() => {
        const setGA = () => {
            ReactGA.pageview(window.location.pathname)
        }
        setGA()
    }, [])

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...userData, [name]: value });
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            setIsSnackbarVisible({ variant: 'error', text: 'All fields are required', type: 'lg', isSnackbarVisible: true })
            return
        } else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(userData.email)) {
            setIsSnackbarVisible({ variant: 'error', text: 'Email is invalid', type: 'lg', isSnackbarVisible: true })
            return
        } else if (userData.password.length < 6) {
            setIsSnackbarVisible({ variant: 'error', text: 'Password must be above 6-digits', type: 'lg', isSnackbarVisible: true })
            return
        } else {
            const { signUpSuccess, user, message } = await setSignUp(userData)
            setUserInfo(user)
            if (signUpSuccess) {
                if (state?.from) {
                    navigate(state.from)
                } else {
                    navigate('/home')
                }
            } else {
                setIsSnackbarVisible({ variant: 'error', text: message, type: 'md', isSnackbarVisible: true })
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <button className={styles.backBtn} onClick={() => { navigate('/login') }}>{closeNavIcon}</button>
                <div className={styles.wrapper}>
                    <h3 className={`${styles.heading} ${typography.text_style_normal2}`}>Welcome</h3>
                    <h2 className={`${styles.heading} ${typography.text_style_medium3}`}>Sign Up</h2>
                    <form>
                        <Input type='text' placeholder={"First Name"} value={userData.firstName} onChange={onChangeHandler} name='firstName' />
                        <Input type='text' placeholder={"Last Name"} value={userData.lastName} onChange={onChangeHandler} name='lastName' />
                        <Input type='email' placeholder={"Email ID"} value={userData.email} onChange={onChangeHandler} name='email' />
                        <Input type='password' placeholder={"Password"} value={userData.password} onChange={onChangeHandler} name='password' />
                        <Input type='password' placeholder={"Confirm Password"} value={userData.confirmPassword} onChange={onChangeHandler} name='confirmPassword' />
                        <LoginButton text='Sign up' type='submit' onSubmit={signupHandler} />
                    </form>
                    <div className={styles.ask}>
                        <p className={typography.text_style_normal4}>Already have an account?</p>
                        <NavLink to='/login'>
                            <SignUpButton text='Log In' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}