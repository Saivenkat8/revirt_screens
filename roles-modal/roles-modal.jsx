import React, { useState } from 'react'
import { ModalWrapper } from '../../mui/modal-wrapper'
import typography from '../../../styles/typography.module.css'
import styles from './roles-modal.module.css'
import { BpCheckbox } from '../../checkbox/checkbox'

export const RolesModal = ({ visible, setVisible, data }) => {

    const [editRole, setEditRole] = useState(false)
    const [roleOptions, setRoleOptions] = useState(false)

    return (
        <ModalWrapper visible={visible} setVisible={setVisible}>
            <div className={styles.roles_modal}>
                <div className={styles.profile}>
                    <div className={styles.profile_img}></div>
                    <div className={`${typography.text_style_normal2} ${styles.profile_info}`}>
                        {data?.name}
                        <p className={`${typography.text_style_normal4} ${styles.level}`}>{data.level}</p>
                    </div>
                </div>
                <div className={styles.label_container}>
                    <p className={`${typography.text_style_normal4} ${styles.heading2}`}>Role</p>
                    <div>
                        {roleOptions && <button className={`${typography.text_style_normal6} ${styles.cancel_changes_btn}`} onClick={() => {setRoleOptions(val => !val)}}>Cancel</button>}
                        {roleOptions && <button className={`${typography.text_style_normal6} ${styles.save_changes_btn}`} onClick={() => {setRoleOptions(val => !val)}}>Save</button>}
                    </div>
                </div>
                {
                    roleOptions ?
                    <div className={styles.option}>
                        <div className={styles.section}>
                            <BpCheckbox />
                            <p className={`${typography.text_style_normal6}`}>Admin</p>
                        </div>
                        <div className={styles.section}>
                            <BpCheckbox />
                            <p className={`${typography.text_style_normal6}`}>Member</p>
                        </div>
                    </div>  
                    :
                    <div className={styles.profile}>
                        <p className={`${typography.text_style_normal8} ${styles.role}`}>{data.isadmin ? "Admin" : "Member"}</p>
                        <div className={styles.scircle} onClick={() => {data.isadmin && setRoleOptions(val => !val)}}></div>
                    </div>
                }
                <p className={`${typography.text_style_normal4} ${styles.heading}`}>Remove</p>
            </div>
        </ModalWrapper>
    )
}