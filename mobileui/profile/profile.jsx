import React from "react"
import styles from './profile.module.css'
import typography from '../../styles/typography.module.css'
import { CreateButton } from "../../components"
import { closeIconSmall } from "../../utils"

export const Profile = () => {

    const infoPlaceholder = {
        FirstName: "username",
        LastName: "firstname lastname",
        email_id: "username@email.com",
        contact_number: "number"
    }

    console.log(Object.keys(infoPlaceholder))

    return (
        <div className={styles.container}>
            <div className={styles.mobileui}>
                <div className={styles.headingSection}>
                    <button className={styles.backbtn}>{closeIconSmall}</button>
                    <h3 className={`${styles.heading} ${typography.text_style_medium1}`}>Profile</h3>
                    <CreateButton text='Edit'/>
                </div>
                <p className={`${styles.heading2} ${typography.text_style_normal4}`}>Your Space Alias</p>
                <div className={styles.circle}></div>
                <div className={styles.border}></div>
                <p className={`${styles.heading2} ${typography.text_style_normal4}`}>Your Personal Information</p>
                {Object.keys(infoPlaceholder).map((key) => {
                    return (
                        <text className={styles.info}>
                            <h3 className={`${styles.heading4} ${typography.text_style_normal6}`}>{key}</h3>
                            <h3 className={`${styles.heading3} ${typography.text_style_normal4}`}>{infoPlaceholder[key]}</h3>
                        </text>
                    )
                })}
                <div className={styles.border}></div>
                <p className={`${styles.heading5} ${typography.text_style_semibold4}`}>Log out</p>
            </div>
        </div> 
    )
}