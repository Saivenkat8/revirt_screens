import React, {useEffect, useState} from "react"
import styles from './profile.module.css'
import typography from '../../styles/typography.module.css'
import { CreateButton } from "../../components"
import { Carousel } from '../../components'
import { BASE_URL, getRequest } from '../../utils'
import { closeIconSmall } from "../../utils"
import useStore from '../../store'

export const ProfileIdit = () => {
    const user = useStore(state => state.user)
    const [avtaars, setAvtaars] = useState([])
    const [selectedAvtaar, setSelectedAvtaar] = useState(state => user?.avatar)
    const [saveProfile, setSaveProfile] = useState(null)
    
    useEffect(() => {
        (async function () {
            try {
                const { data } = await getRequest({
                    url: `${BASE_URL}/user/list-avatars`
                 })
                setAvtaars(data)
            } catch (e) {
                console.log('Error Occured - ', e)
            }
        })()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.mobileui}>
                <div className={styles.headingSection}>
                    <button className={styles.backbtn}>{closeIconSmall}</button>
                    <h3 className={`${styles.heading} ${typography.text_style_medium1}`}>Profile</h3>
                    <CreateButton text='Save'/>
                </div>
                <p className={`${styles.heading2} ${typography.text_style_normal4}`}>Your Space Alias</p>
                
                <div
                    style={{
                        transition: 'all 0.3s ease-in',
                        justifyContent: !saveProfile ? 'flex-start' : 'center',
                    }}
                    className={styles.avatarSelectionSection} >
                    <div className={styles.circle}></div>
                    {/* <div
                        style={{
                            opacity: !saveProfile ? 1 : 0,
                            display: !saveProfile ? 'block' : 'none',
                            pointerEvents: !saveProfile ? 'all' : 'none',
                            marginTop: !saveProfile ? '3rem' : '0',
                            transition: 'all 0.3s ease-in'
                        }}>
                        <Carousel items={avtaars} selectedAvtaar={selectedAvtaar} setSelectedAvtaar={setSelectedAvtaar} btnStyle={{
                            left: { left: '-1.5rem' },
                            right: { right: '-1.5rem' },
                        }} />
                    </div> */}
                </div>
                <div className={styles.border}></div>
                <p className={`${styles.heading2} ${typography.text_style_normal4}`}>Your Personal Information</p>
                <h3 className={`${styles.heading6} ${typography.text_style_normal6}`}>nickname</h3>
                <input type="text" className={`${styles.field} ${typography.text_style_normal4}`} placeholder="username"/>
                <h3 className={`${styles.heading6} ${typography.text_style_normal6}`}>username</h3>
                <input type="text" className={`${styles.field} ${typography.text_style_normal4}`} placeholder="username"/>
                <h3 className={`${styles.heading6} ${typography.text_style_normal6}`}>email-id</h3>
                <input type="text" className={`${styles.field} ${typography.text_style_normal4}`} placeholder="username"/>
                <h3 className={`${styles.heading6} ${typography.text_style_normal6}`}>contact number</h3>
                <input type="text" className={`${styles.field} ${typography.text_style_normal4}`} placeholder="username"/>
            </div>
        </div> 
    )
}