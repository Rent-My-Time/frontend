
import * as styles from "./ProfilePage.module.css"
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import { useContext } from "react"
import { ProfileContext } from "../../ProfileContext"
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../firebase";
function EditContactDetails(props) {

    const [formInfo, setFormInfo] = useContext(ProfileContext)
    const db = firebase.firestore();
    const docRef = db.collection("userProfiles").doc(`${props.id}`);
    let history = useHistory()
    const handleInputChange = event => {
        const target = event.target
        const name = target.name;
        // console.log(target)
        switch (name) {
            case 'youtube':
            case 'linkedin':
            case 'facebook':
            case 'instagram':
            case 'tiktok':

                formInfo.socialmedia[name] = target.value;
                break;
            default:
        }
        const value = target.value;
        setFormInfo({ ...formInfo, [name]: value })
    }

    const saveForm = (e) => {
        e.preventDefault();
        setFormInfo(formInfo)
        console.log(formInfo)
        docRef.set(formInfo)
        history.push(`/edit-profile/details/${props.id}`)

    }

    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <form className={styles['form-row']} >
                    <div className={styles['two-column']}>
                        <h3>Telephone</h3>
                        <PrimaryInput type="text" name="telephone" placeholder="Phone Number" value={formInfo && formInfo.telephone} onChange={handleInputChange} />
                    </div>

                    <div className={styles['two-column']}>
                        <h3>Email</h3>
                        <PrimaryInput type="text" name="email" placeholder="Email Address" value={formInfo && formInfo.email} onChange={handleInputChange} />
                    </div>
                </form>
                <form className={styles['form-row']} >
                    <div className={styles['two-column']}>
                        <h3>Websites</h3>
                        <PrimaryInput type="text" name="websites" placeholder="Website Address" value={formInfo && formInfo.websites} onChange={handleInputChange} />
                    </div>

                    <div className={styles['two-column']}>
                        <h3>Offices</h3>
                        <PrimaryInput type="text" name="offices" placeholder="Office Locations" value={formInfo && formInfo.offices} onChange={handleInputChange} />
                    </div>
                </form>
                <form className={styles['form-row']} >
                    <div className={styles['column']}>
                        <h3>Social Media</h3>
                        <PrimaryInput type="text" placeholder="Youtube" name="youtube" value={formInfo && formInfo.socialmedia.youtube} onChange={handleInputChange} />
                        <PrimaryInput type="text" placeholder="LinkedIn" name="linkedin" value={formInfo && formInfo.socialmedia.linkedin} onChange={handleInputChange} />
                        <PrimaryInput type="text" placeholder="Facebook" name="facebook" value={formInfo && formInfo.socialmedia.facebook} onChange={handleInputChange} />
                        <PrimaryInput type="text" placeholder="Instagram" name="instagram" value={formInfo && formInfo.socialmedia.instagram} onChange={handleInputChange} />
                        <PrimaryInput type="text" placeholder="TikTok" name="tiktok" value={formInfo && formInfo.socialmedia.tiktok} onChange={handleInputChange} />
                    </div>
                </form>
                <div className={styles['row']}>
                    <div style={{ width: '46%' }}>
                        <PrimaryButton onClick={(ev) => saveForm(ev)} >Save Changes</PrimaryButton>
                    </div>
                    <div style={{ width: '46%' }}>
                        <Link to={`/edit-profile/details/${props.id}`} style={{ width: '100%' }}> <SecondaryButton >Discard Changes</SecondaryButton></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditContactDetails
