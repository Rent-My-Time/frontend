import * as styles from "./ProfilePage.module.css"
import { Link, useHistory } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import { useContext } from "react"
import { ProfileContext } from "../../ProfileContext"
import firebase from "../../firebase";
function EditPersonalDetails(props) {
    const [formInfo, setFormInfo] = useContext(ProfileContext)
    const db = firebase.firestore();
    const docRef = db.collection("userProfiles").doc(`${props.id}`);
    let history = useHistory()

    const handleInputChange = event => {
        const target = event.target
        const name = target.name;
        const value = target.value;
        // console.log(target)
        switch (name) {
            case 'lastName':
            case 'firstName':
                setFormInfo({
                    ...formInfo, fullName: {
                        ...formInfo.fullName,
                        [name]: value
                    }
                })
                break;
            default:
                setFormInfo({ ...formInfo, [name]: value })
        }

    }
    const saveForm = (e) => {

        e.preventDefault();
        setFormInfo(formInfo)
        docRef.set(formInfo)
        history.push(`/profile/details/${props.id}`)
        console.log(formInfo)
    }

    return (
        <div className={styles['personal-details']}>

            <div className={styles['input-container']}>

                <h3>Name</h3>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="firstName" value={formInfo && formInfo.fullName.firstName} onChange={handleInputChange} />
                    </div>

                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="lastName" value={formInfo && formInfo.fullName.lastName} onChange={handleInputChange} />
                    </div>

                </form>
                <h3>Nationality</h3>
                <form >
                    <PrimaryInput type="text" name="nationality" value={formInfo && formInfo.nationality} onChange={handleInputChange} />
                </form>

                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Age Group</h3>
                        <select name="ageGroup" value={formInfo && formInfo.ageGroup} className={styles['PrimarySelect']} onChange={handleInputChange}>
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
                        <select name="maritalStatus" value={formInfo && formInfo.maritalStatus} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='Married'>Married</option>
                            <option value='Single'>Single</option>
                            <option value='not specified'>Not Specified</option>
                        </select>
                    </div>
                </form>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Children</h3>

                        <select name="children" value={formInfo && formInfo.children} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value={0}>None</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={`More than 3`}>More than 3</option>
                        </select>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Gender</h3>

                        <select name="gender" value={formInfo && formInfo.gender} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='not specified'>Not Specified</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </form>
                <h3>Languages</h3>
                <form >
                    <PrimaryInput type="text" name="languages" value={formInfo && formInfo.languages} onChange={handleInputChange} />
                </form>
                <h3>Location</h3>

                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="city" value={formInfo && formInfo.city} onChange={handleInputChange} />
                    </div>
                    <div className={styles['two-column']}>
                        <PrimaryInput type="text" name="country" value={formInfo && formInfo.country} onChange={handleInputChange} />
                    </div>
                </form>

                <h3>Education</h3>

                <form>
                    <PrimaryTextArea name="education" value={formInfo && formInfo.education} onChange={handleInputChange} />
                </form>

            </div>
            <div className={styles['button-container']}>
                <div className={styles['row']}>
                    <Link to="/edit-portrait" style={{ width: '46%' }}><SecondaryButton>Portrait</SecondaryButton></Link>

                    <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link>
                </div>
                <ProfileWrapper

                    name={formInfo && formInfo.profileName}
                    experties={formInfo && formInfo.occupation}
                    rate={formInfo && formInfo.hourlyRate}
                    photo={formInfo && formInfo.profileImage}
                />
                <div style={{ width: "100%", marginBottom: "16px" }}>
                    < PrimaryButton onClick={(ev) => saveForm(ev)}>Save Changes</ PrimaryButton>
                </div>
                <Link to={`/profile/details/${props.id}`} style={{ width: '100%' }}><SecondaryButton>Discard Changes</SecondaryButton></Link>


            </div>
        </div>
    )
}

export default EditPersonalDetails
