import {useContext} from 'react'
import * as styles from "./ProfilePage.module.css"
import { Link } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import {ProfileContext}  from "../../ProfileContext"

function PersonalDetails() {
    const [formInfo, setFormInfo]  = useContext(ProfileContext)
    console.log(formInfo, "PROFILE CONTEXT")
    return (
        <div className={styles['personal-details']}>
            <div className={styles['input-container']}>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Name</h3>
                        <p>{formInfo && formInfo.fullName.firstName} {formInfo && formInfo.fullName.lastName}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Nationality</h3>
                        <p>{formInfo && formInfo.nationality}</p>
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Age Group</h3>
                        <p>{formInfo && formInfo.ageGroup}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Marital Status</h3>
                        <p>{formInfo && formInfo.maritalStatus}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Children</h3>
                        <p>{formInfo && formInfo.children}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Gender</h3>
                        <p>{formInfo && formInfo.gender}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Languages</h3>
                        <div className={styles['row']}>
                            {formInfo && formInfo.languages && formInfo.languages.map(language => (<p>{language}</p>))}</div>
                    </div>

                    <div className={styles['two-column']}>
                        <h3>Location</h3>
                        <p>{formInfo && formInfo.city}, {formInfo && formInfo.country}</p>
                    </div>
                </div>
                <h3>Education</h3>
                <p>{formInfo && formInfo.education}</p>
            </div>
            <div className={styles['button-container']}>
                <div className={styles['row']}>
                    {/* <Link to="/edit-portrait" style={{ width: '46%'}}><SecondaryButton>Portrait</SecondaryButton></Link> */}
                    
                    {/* <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link> */}
                </div>

                <ProfileWrapper

                    name={formInfo && formInfo.profileName}
                    experties={formInfo && formInfo.occupation}
                    rate={formInfo && formInfo.hourlyRate}
                    photo={formInfo && formInfo.profileImage}
                />
                <Link to="/edit-profile"  style={{ width: '100%', marginBottom: "16px" }}><SecondaryButton>Edit Profile</SecondaryButton></Link>

                <Link to="/book-specialist" style={{ width: '100%' }}><PrimaryButton>Book</PrimaryButton></Link>


            </div>
        </div>
    )
}

export default PersonalDetails
