import React, {useState} from "react"
import styles from './inbox.module.css'
import typography from '../../styles/typography.module.css'
import { closeIconSmall, searchIcon, horizontalThreeDots, horizontalThreeDots2, channelIcon, calendarUI, chatUI, settingsUI } from "../../utils"

export const Inbox = () => {

    const [userActive, setUserActive] = useState(true);
    const users = [
        {
            name: "username",
            level: "#floor",
            isadmin: false,
            isguest: false
        },
        {
            name: "username",
            level: "#floor",
            isadmin: false,
            isguest: false
        },
        {
            name: "username",
            level: "#floor",
            isadmin: true,
            isguest: false
        },
        {
            name: "username",
            level: "#floor",
            isadmin: false,
            isguest: true
        }
    ]

    const channels = [
        {
            name: "#channelname"
        },
        {
            name: "#channelname"
        },
        {
            name: "#channelname"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.mobileui}>
                <div className={styles.headingSection}>
                    <button className={styles.backbtn}>{closeIconSmall}</button>
                    <h3 className={`${styles.heading} ${typography.text_style_medium1}`}>Inbox</h3>
                    <p className={`${typography.text_style_medium2} ${styles.createchannel}`} style={{ visibility: !userActive ? 'visible' : 'hidden' }}>Create a new Channel</p>
                </div>
                <div className={styles.searchbar}>
                    <input type="text" className={`${styles.field} ${typography.text_style_extralight1}`} placeholder="Search"/>
                    <i className={styles.searchIcon}>{searchIcon}</i>
                </div>
                <div className={`${styles.space_options_conatiner}`}>
                    <p className={userActive ? `${typography.text_style_medium2} ${styles.active_option}` : typography.text_style_medium2}
                    onClick={() => setUserActive(true)}
                    >
                        User
                        {<span className={styles.bottom_line} style={{ visibility: userActive ? 'visible' : 'hidden' }}></span>}
                    </p>
                    <p className={!userActive ? `${typography.text_style_medium2} ${styles.active_option}` : typography.text_style_medium2}
                    onClick={() => setUserActive(false)}
                    >
                        Channel
                        <span className={styles.bottom_line} style={{ visibility: !userActive ? 'visible' : 'hidden' }}></span>
                    </p>
                </div>
                {
                    userActive
                        ?
                        <div className={styles.users_info_container}>
                            <ul className={styles.users_list}>
                                {
                                    users.map(user => {
                                        return (
                                            <li key={user} className={styles.user_list_item}>
                                                <div className={styles.user_list_item_profile}></div>
                                                <div className={`${typography.text_style_light2} ${styles.user_list_item_info}`}>
                                                    <p className={(user.isadmin || user.isguest) ? styles.activeuser : styles.user}>
                                                        {user?.name}
                                                        {user.isadmin && <span className={`${typography.text_style_normal9} ${styles.admin}`}>Admin</span>}
                                                        {user.isguest && <span className={`${typography.text_style_normal9} ${styles.guest}`}>Guest</span>}
                                                    </p>
                                                    <p className={(user.isadmin || user.isguest) ? styles.activeuser : styles.user}>{user?.level}</p>
                                                </div>
                                                {(user.isadmin || user.isguest) && <div className={styles.scircle}></div>}
                                                <div className={styles.dots}>{(user.isadmin || user.isguest) ? horizontalThreeDots : horizontalThreeDots2}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        :
                        <div className={styles.users_info_container}>
                            <ul className={styles.users_list}>
                                {
                                    channels.map(channel => {
                                        return (
                                            <li key={channel} className={styles.user_list_item}>
                                                <div className={styles.channelicon}>{channelIcon}</div>
                                                <div className={styles.user_list_item_info}>
                                                    <h3 className={`${typography.text_style_light2} ${styles.heading6}`}>{channel?.name}</h3>
                                                </div>
                                                <div className={styles.dots}>{horizontalThreeDots2}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                <div className={styles.footer}>
                    <div>{calendarUI}</div>
                    <div>{chatUI}</div>
                    <div>{settingsUI}</div>
                </div>
            </div>
        </div> 
    )
}