import React, { useState, useEffect } from "react"
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import GoogleLogin from "react-google-login"
import ReactGA from 'react-ga'
import styles from './style.module.css'
import typography from '../../styles/typography.module.css'
import { Input, LoginButton, SignUpButton } from "../../components"
import { clientId } from "../../utils/Constants"
import { closeNavIcon } from "../../utils"
import useStore from "../../store"
import User from "../../utils/helpers/user"

export const Login = () => {
    const { isAuthenticated } = new User()
    const navigate = useNavigate()
    const { state } = useLocation()
    // const { setLogin, setGoogleLogin, setIsSnackbarVisible } = useStore()
    const setLogin = useStore(state => state.setLogin)
    const setGoogleLogin = useStore(state => state.setGoogleLogin)
    const setIsSnackbarVisible = useStore(state => state.setIsSnackbarVisible)
    const setUserInfo = useStore(state => state.setUser)
    const [userData, setUser] = useState({
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

    const loginHandler = async (e) => {
        e.preventDefault();
        if (!userData.email || !userData.password) {
            setIsSnackbarVisible({ variant: 'error', text: 'All fields are required', type: 'md', isSnackbarVisible: true })
            return
        } else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(userData.email)) {
            setIsSnackbarVisible({ variant: 'error', text: 'Email is invalid', type: 'md', isSnackbarVisible: true })
            return
        } else {
            const { loginSuccess, user, message } = await setLogin(userData)
            setUserInfo(user)
            if (loginSuccess) {
                setTimeout(() => {
                    setIsSnackbarVisible({ variant: 'success', text: 'Login success', type: 'md', isSnackbarVisible: true })
                    if (state?.from) {
                        navigate(state.from)
                    } else {
                        navigate('/home')
                    }
                }, 1000)
            } else {
                setIsSnackbarVisible({ variant: 'error', text: message, type: 'md', isSnackbarVisible: true })
            }
        }
    }

    const googleLoginSuccessHandler = async (res) => {
        const { email, familyName, givenName, googleId } = res.profileObj;
        const userData = {
            firstName: givenName,
            lastName: familyName,
            googleId: googleId,
            email: email
        }
        const { loginSuccess, user, message } = await setGoogleLogin(userData)
        setUserInfo(user)
        if (loginSuccess) {
            if (state?.from) {
                navigate(state.from)
            } else {
                navigate('/home')
            }
        } else {
            setIsSnackbarVisible({ variant: 'error', text: message, type: 'md', isSnackbarVisible: true })
        }
    }

    const googleLoginFailureHandler = (e) => {
        setIsSnackbarVisible({ variant: 'error', text: 'Login failed, try again', type: 'md', isSnackbarVisible: true })
    }

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => { navigate('/') }}>{closeNavIcon}</button>
            <div className={styles.wrapper}>
                <h3 className={`${styles.heading} ${typography.text_style_normal2}`}>Welcome back!!</h3>
                <h2 className={`${styles.heading} ${typography.text_style_medium3}`}>Log In</h2>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Log In with Google"
                    className={`${styles.googleLogin} ${typography.text_style_normal4}`}
                    onSuccess={googleLoginSuccessHandler}
                    onFailure={googleLoginFailureHandler}
                />
                <span className={styles.divider}>
                    OR
                </span>
                <form onSubmit={loginHandler}>
                    <Input type='email' placeholder={"Email"} value={userData.email} onChange={onChangeHandler} name='email' />
                    <Input type='password' placeholder={"Password"} value={userData.password} onChange={onChangeHandler} name='password' />
                    <LoginButton text='Log In' type='submit' onSubmit={loginHandler} />
                </form>
                <div className={styles.ask}>
                    <p className={typography.text_style_normal4}>New to revirt.space?</p>
                    <NavLink to='/signup' state={{ from: state?.from && state.from }}>
                        <SignUpButton text='Sign Up' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}