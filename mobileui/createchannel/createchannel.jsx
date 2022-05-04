import React from "react"
import styles from './channel.module.css'
import typography from '../../styles/typography.module.css'
import { CreateButton, CreateButton2, BpCheckbox } from "../../components"
import { closeIconSmall } from "../../utils"

export const CreateChannel = () => {
    const members = [
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    },
    {
        name: "Username",
        email: "Username@email.com"
    }
]
    return (
        <div className={styles.container}>
            <div className={styles.mobileui}>
                <div className={styles.headingSection}>
                    <button className={styles.backbtn}>{closeIconSmall}</button>
                    <h3 className={`${styles.heading} ${typography.text_style_medium1}`}>Create a new Channel</h3>
                    <CreateButton text='Create'/>
                </div>
                <p className={`${styles.head} ${typography.text_style_normal4}`}>Location</p>
                <input type="text" className={`${styles.field} ${typography.text_style_extralight1}`} placeholder="Team"/>
                <p className={`${styles.heading2} ${typography.text_style_normal4}`}>Add Member</p>
                <div className={styles.scroller}>
                    <ul>
                        <li>
                            {members.map((item) => (
                            <div className={styles.section}>
                                <BpCheckbox />
                                <div className={styles.profile}></div>
                                <text>
                                    <p className={`${styles.head2} ${typography.text_style_normal4}`}>{item.name}</p>
                                    <p className={`${styles.head2} ${typography.text_style_normal8}`}>{item.email}</p>
                                </text>
                            </div>
                            ))}
                        </li>
                    </ul>
                </div>
                <div className={styles.navsection}>
                    <CreateButton2 text='Create'/>
                </div>
            </div>
            
        </div>
        
    )
}