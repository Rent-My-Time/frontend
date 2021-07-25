import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
function EditPersonalDetails(props) {
    const [formInfo, setformInfo] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    useEffect(() => {
        setformInfo(data)
        setProfileInfo(data)
    }, [])
    console.log(profileInfo)
    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })
    }
    const saveForm = () => {
        const { firstName, lastName, nationality, ageGroup, maritalStatus, children, gender, languages, city, country, education } = formInfo
        if (!firstName || !lastName || !nationality || !ageGroup || !maritalStatus || !children || !gender || !languages || !city || !country || !education) return
        console.log(formInfo, " SAVE FORM")
    }
    console.log(formInfo, "FORM")
    return (
        <div className={styles['personal-details']}>
            <div className={styles['input-container']}>
                <h3>Name</h3>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                    <PrimaryInput type="text" name="firstName" value={formInfo.firstName} onChange={handleInputChange}  />
                    </div>
                    <div className={styles['two-column']}>
                    <PrimaryInput  type="text" name="lastName" value={formInfo.lastName} onChange={handleInputChange} />
                    </div>
                </form>
                <h3>Nationality</h3>
                <form >
                <PrimaryInput type="text" name="nationality" value={formInfo.nationality} onChange={handleInputChange} />
                </form>

                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Age Group</h3>
                        <PrimaryInput  type="text" name="ageGroup" value={formInfo.ageGroup} onChange={handleInputChange} />
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Marital Status</h3>
                        <PrimaryInput  type="text" name="maritalStatus" value={formInfo.maritalStatus} onChange={handleInputChange} />
                    </div>
                </form>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Children</h3>
                        <PrimaryInput type="text" name="children" value={formInfo.children} onChange={handleInputChange} />
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Gender</h3>
                        <PrimaryInput type="text" name="gender" value={formInfo.gender} onChange={handleInputChange} />
                    </div>
                </form>
                <h3>Languages</h3>
                <form >
                <PrimaryInput type="text" name="languages" value={formInfo.languages} onChange={handleInputChange} />
                </form>
                <h3>Location</h3>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                    <PrimaryInput  type="text" name="city" value={formInfo.city} onChange={handleInputChange} />
                    </div>
                    <div className={styles['two-column']}>
                    <PrimaryInput  type="text" name="country" value={formInfo.country} onChange={handleInputChange} />
                    </div>
                </form>
                <h3>Education</h3>
                <form>
                <PrimaryTextArea  name="education" value={formInfo.education} onChange={handleInputChange}/>
                </form>
            </div>
            <div className={styles['button-container']}>
                <div className={styles['row']}>
                    <Link to="/edit-portrait" style={{ width: '46%'}}><SecondaryButton>Portrait</SecondaryButton></Link>
                    
                    <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link>
                </div>
                <ProfileWrapper

                    name={props.formInfo.profileName}
                    experties={props.formInfo.occupation}
                    rate={props.formInfo.hourlyRate}
                    photo={props.formInfo.profileImage}
                />
                <div  style={{width:"100%", marginBottom: "16px" }}>
                < PrimaryButton onClick={saveForm}>Save Changes</ PrimaryButton>
                </div>

                <SecondaryButton>Discard Changes</SecondaryButton>

                  
            </div>
        </div>
    )
}

export default EditPersonalDetails
