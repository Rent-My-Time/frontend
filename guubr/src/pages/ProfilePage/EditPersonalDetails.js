import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
function EditPersonalDetails(props) {
    const [formInfo, setformInfo] = useState(props.formInfo)
    useEffect(() => {
        setformInfo(formInfo)
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })

    }
    const saveForm = () => {
        const { firstName, lastName, nationality, ageGroup, maritalStatus, children, gender, languages, city, country, education } = formInfo
        if (!firstName || !lastName || !nationality || !ageGroup || !maritalStatus || !children || !gender || !languages || !city || !country || !education) return
        setformInfo(formInfo)

    }

    return (
        <div className={styles['personal-details']}>

            <div className={styles['input-container']}>

                <h3>Name</h3>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="firstName" value={formInfo.firstName} onChange={handleInputChange} />
                    </div>

                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="lastName" value={formInfo.lastName} onChange={handleInputChange} />
                    </div>

                </form>
                <h3>Nationality</h3>
                <form >
                    <PrimaryInput type="text" name="nationality" value={formInfo.nationality} onChange={handleInputChange} />
                </form>

                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Age Group</h3>
                        <select name="ageGroup" value={formInfo.ageGroup} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='20-30'>20-30</option>
                            <option value='30-40'>30-40</option>
                            <option value='40-50'>40-50</option>
                            <option value='60-70'>60-70</option>
                            <option value='70-80'>70-80</option>
                            <option value='80-90'>80-90</option>
                            <option value='90+'>90+</option>
                        </select>
                    </div>

                    <div className={styles['two-column']}>
                        <h3>Marital Status</h3>
                        <select name="maritalStatus" value={formInfo.maritalStatus} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='Married'>Married</option>
                            <option value='Single'>Single</option>
                            <option value='not specified'>Not Specified</option>
                        </select>
                    </div>
                </form>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Children</h3>

                        <select name="children" value={formInfo.children} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='none'>None</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3+</option>
                        </select>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Gender</h3>

                        <select name="gender" value={formInfo.gender} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='not specified'>Not Specified</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </form>
                <h3>Languages</h3>
                <form >
                    <PrimaryInput type="text" name="languages" value={formInfo.languages} onChange={handleInputChange} />
                </form>
                <h3>Location</h3>

                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="city" value={formInfo.city} onChange={handleInputChange} />
                    </div>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="country" value={formInfo.country} onChange={handleInputChange} />
                    </div>
                </form>

                <h3>Education</h3>

                <form>
                    <PrimaryTextArea name="education" value={formInfo.education} onChange={handleInputChange} />
                </form>

            </div>
            <div className={styles['button-container']}>
                <div className={styles['row']}>
                    <Link to="/edit-portrait" style={{ width: '46%' }}><SecondaryButton>Portrait</SecondaryButton></Link>

                    <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link>
                </div>
                <ProfileWrapper

                    name={formInfo.profileName}
                    experties={formInfo.occupation}
                    rate={formInfo.hourlyRate}
                    photo={formInfo.profileImage}
                />
                <div style={{ width: "100%", marginBottom: "16px" }}>
                    < PrimaryButton onClick={saveForm}>Save Changes</ PrimaryButton>
                </div>
                <SecondaryButton>Discard Changes</SecondaryButton>


            </div>
        </div>
    )
}

export default EditPersonalDetails
