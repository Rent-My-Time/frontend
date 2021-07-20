import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
function ProfilePage() {
    const [formInfo, setformInfo] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    useEffect(() => {
        setformInfo(data)
        setProfileInfo(data)
    }, [])
    console.log(profileInfo)
    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({...formInfo, [name]:value})
    }
    const saveForm = () => {
        const {firstName, lastName, nationality, ageGroup, maritalStatus, children, gender, languages, city, country, education} = formInfo
        if(!firstName || !lastName|| !nationality|| !ageGroup|| !maritalStatus|| !children|| !gender|| !languages|| !city|| !country|| !education) return
        console.log(formInfo, " SAVE FORM")
    }
    console.log(formInfo, "FORM")
    return (
        <div className={styles['profile-page']}>
            <div className={styles['main-container']}>
                <div className={styles['navigation-container']}>
                    <h1>Personal<br />Details</h1>
                    <h1>Contact<br />Details</h1>
                    <h1>Specialist<br />Fields</h1>
                    <h1>Availability</h1>
                </div>
                <div className={styles['nav-selector']}></div>
                <div className={styles['profile-form']}>
                    <div className={styles['input-container']}>
                        <h2>Name</h2>
                        <form className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <input type="text" name="firstName" value={formInfo.firstName} onChange={handleInputChange}/>
                            </div>
                            <div className={styles['two-column']}>
                                <input type="text" name="lastName" value={formInfo.lastName} onChange={handleInputChange}/>
                            </div>
                        </form>
                        <h2>Nationality</h2>
                        <form >
                            <input type="text"  name="nationality" value={formInfo.nationality} onChange={handleInputChange}/>
                        </form>

                        <form className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <h2>Age Group</h2>
                                <input type="text"  name="ageGroup" value={formInfo.ageGroup} onChange={handleInputChange}/>
                            </div>
                            <div className={styles['two-column']}>
                                <h2>Marital Status</h2>
                                <input type="text"  name="maritalStatus" value={formInfo.maritalStatus} onChange={handleInputChange} />
                            </div>
                        </form>
                        <form className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <h2>Children</h2>
                                <input type="text" name="children" value={formInfo.children} onChange={handleInputChange}/>
                            </div>
                            <div className={styles['two-column']}>
                                <h2>Gender</h2>
                                <input type="text" name="gender" value={formInfo.gender} onChange={handleInputChange} />
                            </div>
                        </form>
                        <h2>Languages</h2>
                        <form >
                            <input type="text" name="languages" value={formInfo.languages}  onChange={handleInputChange}/>
                        </form>
                        <h2>Location</h2>
                        <form className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <input type="text" name="city"   value={formInfo.city}  onChange={handleInputChange}/>
                            </div>
                            <div className={styles['two-column']}>
                                <input type="text" name="country" value={formInfo.country} onChange={handleInputChange} />
                            </div>
                        </form>
                        <h2>Education</h2>
                        <form>
                            <textarea name="education" value={formInfo.education} onChange={handleInputChange}></textarea>
                        </form>
                    </div>
                    <div className={styles['button-container']}>
                        <div className={styles["profile-picture"]}><img src={profileInfo.profileImage} alt="avatar" width="100%"/></div>
                        <div className={styles['row']}>
                            <h1> {profileInfo.profileName} </h1>
                            <div className={styles['column']}>
                                <h2>{profileInfo.occupation} </h2>
                                <h2>{profileInfo.hourlyRate} /hr</h2>
                            </div>
                        </div>


                        <button>Update Avatar</button>
                        <button>Edit Gallery</button>
                        <button className={styles['button-primary']} onClick={saveForm}>Save Changes</button>
                        <button >Discard Changes</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage
