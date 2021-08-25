import * as styles from "./ProfilePage.module.css"
import { Link, useHistory } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import { useContext, useState, useEffect } from "react"
import { ProfileContext } from "../../ProfileContext"
import firebase from "../../firebase";
function EditPersonalDetails(props) {
    const [formInfo, setFormInfo] = useContext(ProfileContext)
    const [language, setLanguage] = useState("English")
    const db = firebase.firestore();
    const docRef = db.collection("userProfiles").doc(`${props.id}`);
    let history = useHistory()
    useEffect(() => {

    }, [language])
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
            case 'languages':
                setLanguage(value)
                break;
            default:
                setFormInfo({ ...formInfo, [name]: value })
        }

    }

    const addLanguage = (e) => {

        e.preventDefault()
        if (formInfo.languages.includes(language)) {
            return alert(`${language} already exists`)
        } else {
            setFormInfo({
                ...formInfo, languages: formInfo.languages.concat(language)
            })
        }
        console.log(formInfo.languages)
    }
    const deleteLanguage = (e) => {
        e.preventDefault()

        let language = e.target.value
        formInfo.languages = formInfo.languages.filter(item => item !== language)
        setFormInfo({ ...formInfo, language: formInfo.languages })
        console.log(formInfo)
    }

    const saveForm = (e) => {
        e.preventDefault();
        setFormInfo(formInfo)
        docRef.set(formInfo)
        history.push(`/edit-profile/details/${props.id}`)
        console.log(formInfo)

    }

    return (
        <div className={styles['personal-details']}>
            <div className={styles['input-container']}>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Name</h3>
                        <div className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <PrimaryInput type="text" placeholder="First" name="firstName" value={formInfo && formInfo.fullName.firstName} onChange={handleInputChange} />
                            </div>

                            <div className={styles['two-column']}>
                                <PrimaryInput type="text" placeholder="Last" name="lastName" value={formInfo && formInfo.fullName.lastName} onChange={handleInputChange} />
                            </div>

                        </div>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Nationality</h3>
                        <PrimaryInput type="text" name="nationality" value={formInfo && formInfo.nationality} onChange={handleInputChange} />
                    </div>
                </div>
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

                        <select name="gender" placeholder="Gender" value={formInfo && formInfo.gender} className={styles['PrimarySelect']} onChange={handleInputChange}>
                            <option value='not specified'>Not Specified</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </form>
                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Languages</h3>
                        <div className={styles['form-row']}>
                            <select name="languages" placeholder="Add a Language" value={language} className={styles['PrimarySelect']} onChange={handleInputChange}>
                                <option value="English">English</option>
                                <option value="Mandarin">Mandarin</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Russian">Russian</option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="Indonesian">Indonesian</option>
                                <option value="German">German</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Italian">Italian</option>
                                <option value="Polish">Polish</option>
                                <option value="Ukrainian">Ukrainian</option>
                                <option value="Dutch">Dutch</option>
                                <option value="Thai">Thai</option>
                                <option value="Tagalog">Tagalog</option>
                                <option value="Somali">Somali</option>
                                <option value="Greek">Greek</option>
                            </select>
                            <PrimaryButton style={{ width: '50%', marginLeft: "24px" }} onClick={(ev) => addLanguage(ev)}>Add</PrimaryButton>
                        </div>
                    </div>
                    <div className={styles['two-column']}>
                        <h3><br></br></h3>
                        <div className={styles['form-row']} style={{ flexWrap: 'wrap', alignItems: "center", border: "2px solid lightgrey", padding: "12px 16px" }}>
                            {formInfo && formInfo.languages.map(language => <button value={language} onClick={(ev) => deleteLanguage(ev)} className={styles['delete-lang']}>{language}</button>)}
                            {/* <PrimaryInput value={formInfo && formInfo.languages.join(" ")} onChange={handleInputChange} /> */}
                        </div>
                    </div>
                </form>


                <form className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <div className={styles['form-row']}>
                            <div className={styles['two-column']}>
                                <h3>Location</h3>
                                <PrimaryInput type="text" name="city" placeholder="City/State" value={formInfo && formInfo.city} onChange={handleInputChange} />
                            </div>
                            <div className={styles['two-column']}>
                                <h3><br></br></h3>
                                <PrimaryInput type="text" name="country" placeholder="Country" value={formInfo && formInfo.country} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>occupation</h3>
                        <PrimaryInput name="occupation" value={formInfo && formInfo.occupation} onChange={handleInputChange} />
                    </div>
                </form>
                <form className={styles['form-row']}>


                    <div className={styles['column']}>
                        <h3>Education</h3>
                        <PrimaryTextArea name="education" value={formInfo && formInfo.education} onChange={handleInputChange} />
                    </div>
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
                    photo={formInfo && formInfo.pic}
                />
                <div style={{ width: "100%", marginBottom: "16px" }}>
                    < PrimaryButton onClick={(ev) => saveForm(ev)}>Save Changes</ PrimaryButton>
                </div>
                <Link to={`/edit-profile/details/${props.id}`} style={{ width: '100%' }}><SecondaryButton>Discard Changes</SecondaryButton></Link>


            </div>
        </div>
    )
}

export default EditPersonalDetails
