import React from "react"
import styles from './landing.module.css'
import typography from '../../styles/typography.module.css'
import { LoginButtonMobile, SignUpButtonMobile } from "../../components"
import { logofinal } from "../../assets"

export const Landing = () => {
    return (
        <div className={styles.landingcontainer}>
            <div className={styles.wrapperLanding}>
                <h2 className={`${styles.heading2} ${typography.text_style_semibold3}`}>revirt.space</h2>
                <img src={logofinal} alt='logofinal' className={styles.logo}/>
                <div className={styles.box}>
                    <div className={styles.circle1}></div>
                    <p className={`${styles.heading3} ${typography.text_style_normal6}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                    <SignUpButtonMobile text='Sign Up'/>
                    <LoginButtonMobile text='Log In' type='submit'/>
                    <div className={styles.circle2}></div>
                </div>
            </div>
        </div>
    )
}