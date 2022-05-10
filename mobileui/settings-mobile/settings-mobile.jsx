import React, {useState, useRef, useEffect} from "react"
import styles from './settings.module.css'
import typography from '../../styles/typography.module.css'
import { RolesModal } from '../../components'
import { closeIconSmall, calendarUI, chatUI, settingsUI, space_settings, memberAdd, horizontalThreeDots, searchIcon } from "../../utils"

export const SettingsMobile = () => {

    const [option, setOption] = useState('space')
    const [floorsActive, setFloorsActive] = useState(true)
    const [renameSpace, setRenameSpace] = useState(true)
    const [spaceOptions, setSpaceOptions] = useState(false)
    const [rolesModal, setRolesModal] = useState(false)
    const [userData, setUserData] = useState({})
    const spaceNameInput = useRef(null)
    const currentSpace = {
        id : "1",
        name : "Space Name"
    }
    const floor_data = [
        {
            id: 1,
            name: "Room 1",
            occupancy: "40",
            editaccess: false,
            flooroptions: false
        }
    ]

    const [floors, setFloors] = useState(floor_data)

    const role = 
        {
            name: "admin",
            category: "Default"
        }

    const users = [
        {
            name: "username",
            isadmin: true,
            level: "#floor"
        },
        {
            name: "username",
            isadmin: true,
            level: "#floor"
        },
        {
            name: "username",
            isadmin: false,
            level: "#floor"
        },
        {
            name: "username",
            isadmin: false,
            level: "#floor"
        }
    ]

    const addusers = [
        {
            name: "username",
            email: "emailid"
        }
    ]

    useEffect(() => {
        if (!renameSpace) {
            spaceNameInput.current.value = currentSpace?.name
        }
    }, [renameSpace])

    const handleeditchange = (index) => {
        const newFloors = [...floors];
        console.log(index)
        newFloors[index].editaccess = !newFloors[index].editaccess;
        setFloors(newFloors);
    };

    const handleoptionchange = (index) => {
        const newFloors = [...floors];
        console.log(index)
        newFloors[index].flooroptions = !newFloors[index].flooroptions;
        setFloors(newFloors);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mobileui}>
                    <div className={styles.headingSection}>
                        <button className={styles.backbtn}>{closeIconSmall}</button>
                        <h3 className={`${styles.heading} ${typography.text_style_medium1}`}>Settings</h3>
                    </div>
                    <div className={styles.modal_body_section}>
                        <div className={styles.left_options_conatiner}>
                            <button className={option === 'space' ? styles.left_active_option : ''} onClick={() => { setOption('space') }}>{space_settings}</button>
                            {role?.name.toLowerCase() === 'admin' && <button className={option === 'request' ? styles.left_active_option : ''} onClick={() => { setOption('request') }}>{memberAdd}</button>}
                        </div>
                        <div className={styles.content_container}>
                            {
                                option === 'space' ?
                                    <>
                                        <div className={styles.space_info}>
                                            <p className={`${typography.text_style_normal4} ${styles.space_label_text3}`}>Space Settings</p>
                                            <div className={renameSpace ? styles.new_space_info : styles.edit_new_space_info}>
                                            <div className={styles.space_label_container}>
                                                <p className={`${typography.text_style_normal4} ${styles.space_label_text}`}>Space Name</p>
                                                <div className={styles.space_action_conatiner}>
                                                    {
                                                        role?.name.toLowerCase() === 'admin' && renameSpace &&
                                                        <button onClick={() => { setSpaceOptions(val => !val) }} className={styles.dots}>{horizontalThreeDots}</button>
                                                    }
                                                    {
                                                        spaceOptions &&
                                                        <>
                                                            <div onClick={() => { setSpaceOptions(val => !val) }} className={styles.optionBackdrop}></div>
                                                            <ul className={`${styles.space_options_list}`}>
                                                                <li
                                                                    onClick={() => {
                                                                        setRenameSpace(val => !val)
                                                                        setSpaceOptions(false)
                                                                    }}
                                                                    className={`${typography.text_style_normal8} ${styles.space_options_list_items}`}
                                                                >
                                                                    Rename Space
                                                                </li>
                                                                <li
                                                                    onClick={() => {
                                                                        setSpaceOptions(false)
                                                                    }}
                                                                    className={`${typography.text_style_normal8} ${styles.space_options_list_items}`}
                                                                >
                                                                    Delete Space
                                                                </li>
                                                            </ul>
                                                        </>
                                                    }
                                                </div>
                                                {!renameSpace && <button className={`${typography.text_style_normal6} ${styles.cancel_changes_btn}`} onClick={() => {setRenameSpace(val => !val)}}>Cancel</button>}
                                                {!renameSpace && <button className={`${typography.text_style_normal6} ${styles.save_changes_btn}`} onClick={() => {setRenameSpace(val => !val)}}>Save</button>}
                                            </div>
                                            {renameSpace ?
                                                    <p className={`${typography.text_style_normal4} ${styles.space_name}`}>{currentSpace?.name}</p>
                                                    :
                                                    <input type='text' ref={spaceNameInput} onChange={(e) => { spaceNameInput.current.value = e.target.value }} className={`${typography.text_style_normal4} ${styles.space_name_input}`} />
                                            }
                                            </div>
                                        </div>
                                        <div className={`${styles.space_options_conatiner}`}>
                                            <p className={floorsActive ? `${typography.text_style_medium2} ${styles.active_option}` : typography.text_style_medium2}
                                                onClick={() => setFloorsActive(true)}
                                            >
                                                Floors
                                                {<span className={styles.bottom_line} style={{ visibility: floorsActive ? 'visible' : 'hidden' }}></span>}
                                            </p>
                                            <p className={!floorsActive ? `${typography.text_style_medium2} ${styles.active_option}` : typography.text_style_medium2}
                                                onClick={() => setFloorsActive(false)}
                                            >
                                                Users
                                                <span className={styles.bottom_line} style={{ visibility: !floorsActive ? 'visible' : 'hidden' }}></span>
                                            </p>
                                        </div>
                                        {
                                            floorsActive
                                                ?
                                                <div className={styles.info_container}>
                                                    <ul className={styles.list}>
                                                        {
                                                            floors.map((item, index) => {
                                                                return (
                                                                    <li key={index} className={item.editaccess ? styles.edit_floor_list_item : styles.floor_list_item}>
                                                                        <div className={styles.floor_label_container}>
                                                                            <p className={`${typography.text_style_normal4} ${styles.floor_label_text}`}>Floor Name</p>
                                                                            <div className={styles.space_action_conatiner}>
                                                                                {
                                                                                    role?.name.toLowerCase() === 'admin' && !item.editaccess &&
                                                                                    <button onClick={() => { handleoptionchange(index) }} className={styles.dots}>{horizontalThreeDots}</button>
                                                                                }
                                                                                {
                                                                                    item.flooroptions &&
                                                                                    <>
                                                                                        <div onClick={() => { handleoptionchange(index) }} className={styles.optionBackdrop}></div>
                                                                                        <ul className={`${styles.space_options_list}`}>
                                                                                            <li
                                                                                                onClick={() => {
                                                                                                    handleoptionchange(index)
                                                                                                    handleeditchange(index)
                                                                                                }}
                                                                                                className={`${typography.text_style_normal8} ${styles.space_options_list_items}`}
                                                                                            >
                                                                                                Rename Floor
                                                                                            </li>
                                                                                            <li
                                                                                                onClick={() => {
                                                                                                    handleoptionchange(index)
                                                                                                }}
                                                                                                className={`${typography.text_style_normal8} ${styles.space_options_list_items}`}
                                                                                            >
                                                                                                Delete Floor
                                                                                            </li>
                                                                                        </ul>
                                                                                    </>
                                                                                }
                                                                            </div>
                                                                            {item.editaccess && <button className={`${typography.text_style_normal6} ${styles.cancel_changes_btn}`} onClick={() => {handleeditchange(index)}}>Cancel</button>}
                                                                            {item.editaccess && <button className={`${typography.text_style_normal6} ${styles.save_changes_btn}`} onClick={() => {handleeditchange(index)}}>Save</button>}
                                                                        </div>
                                                                        <p className={`${typography.text_style_normal4} ${styles.floor_name}`}>{item?.name}</p> 
                                                                        <div className={styles.floor_list_item_img}></div>
                                                                        <p className={`${typography.text_style_normal4} ${styles.floor_occupancy}`}>Occupancy - {item?.occupancy}</p>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                : 
                                                <>
                                                    <div className={styles.searchbar}>
                                                        <input type="text" className={`${styles.field} ${typography.text_style_extralight1}`} placeholder="Search"/>
                                                        <i className={styles.searchIcon}>{searchIcon}</i>
                                                    </div>
                                                    <div className={styles.info_container}>
                                                        <ul className={styles.list}>
                                                            {
                                                                users.map(user => {
                                                                    return (
                                                                        <li key={user} className={styles.user_list_item}>
                                                                            <div className={styles.user_list_item_profile}></div>
                                                                            <div className={`${typography.text_style_light2} ${styles.user_list_item_info}`}>
                                                                                {user?.name}
                                                                                {user.isadmin && <p className={`${typography.text_style_normal9} ${styles.admin}`}>Admin</p>}
                                                                                {!user.isadmin && <p className={`${typography.text_style_normal9} ${styles.guest}`}>Member</p>}
                                                                            </div>
                                                                            <button className={styles.dots} onClick={() => { 
                                                                                setRolesModal(val => !val) 
                                                                                setUserData(user) 
                                                                            }}>{horizontalThreeDots}</button>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </>
                                                
                                        }
                                    </> 
                                    :
                                    <>
                                        <p className={`${typography.text_style_normal4} ${styles.request_label_text}`}>Request</p>
                                        <div className={styles.searchbar}>
                                            <input type="text" className={`${styles.field} ${typography.text_style_extralight1}`} placeholder="Search"/>
                                            <i className={styles.searchIcon}>{searchIcon}</i>
                                        </div>
                                        <div className={styles.info_container}>
                                            <ul className={styles.request_list}>
                                                {
                                                    addusers.map(user => {
                                                        return (
                                                            <li key={user} className={styles.request_list_item}>
                                                                <div className={styles.user_list_item_profile}></div>
                                                                    <div className={`${typography.text_style_light2} ${styles.user_list_item_info}`}>
                                                                        {user?.name}
                                                                        <p className={styles.email_label_text}>{user?.email}</p>
                                                                    </div>
                                                                    <div className={styles.request_action_conatiner}>
                                                                        <button className={`${typography.text_style_normal8} ${styles.delete_btn}`}>Delete</button>
                                                                        <button className={`${typography.text_style_normal8} ${styles.approve_btn}`}>Approve</button>
                                                                    </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </>    
                            }
                        </div>
                    </div>
                
                    <div className={styles.footer}>
                        <div>{calendarUI}</div>
                        <div>{chatUI}</div>
                        <div>{settingsUI}</div>
                    </div>
                </div>
            </div> 
            {rolesModal && <RolesModal visible={rolesModal} setVisible={setRolesModal} data={userData}/>}
        </>
    )
}