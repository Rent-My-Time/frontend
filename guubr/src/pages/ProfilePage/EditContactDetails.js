
import * as styles from "./ProfilePage.module.css"
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import { useContext } from "react"
import { ProfileContext } from "../../ProfileContext"
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
function EditContactDetails(props) {

    const [formInfo, setFormInfo] = useContext(ProfileContext)
    const db = firebase.firestore();
    const docRef = db.collection("users").doc(`${props.id}`);

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

    const saveForm = () => {
        const { telephone, email, websites, offices, socialmedia } = formInfo
        if (socialmedia) {
            formInfo.socialmedia = {
                facebook: formInfo.socialmedia.facebook,
                youtube: formInfo.socialmedia.youtube,
                instagram: formInfo.socialmedia.instagram,
                linkedin: formInfo.socialmedia.linkedin,
                tiktok: formInfo.socialmedia.tiktok,
            }

        }
        if (!telephone || !email || !websites || !offices || !socialmedia) return
        setFormInfo(formInfo)
        console.log(formInfo)
        docRef.set(formInfo)

    }

    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <form>
                    <PrimaryInput type="text" name="telephone" value={formInfo && formInfo.telephone} onChange={handleInputChange} />
                </form>
                <h3>Email</h3>
                <form >
                    <PrimaryInput type="text" name="email" value={formInfo && formInfo.email} onChange={handleInputChange} />
                </form>
                <h3>Websites</h3>
                <form className={styles['row']}>
                    <div style={{ width: '100%' }} >
                        <PrimaryInput type="text" name="websites" value={formInfo && formInfo.websites} onChange={handleInputChange} />
                    </div>

                    {/* <div style={{ width: '16%' }}><PrimaryButton>Add</PrimaryButton></div> */}

                </form>
                <h3>Offices</h3>
                <form className={styles['row']}>
                    <div style={{ width: '100%' }} >
                        <PrimaryInput type="text" name="offices" value={formInfo && formInfo.offices} onChange={handleInputChange} />
                    </div>

                    {/* <div style={{ width: '16%' }}><PrimaryButton>Add</PrimaryButton></div> */}

                </form>
                <h3>Social Media</h3>
                <form >

                    <PrimaryInput type="text" placeholder="Youtube" name="youtube" value={formInfo && formInfo.socialmedia.youtube} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="LinkedIn" name="linkedin" value={formInfo && formInfo.socialmedia.linkedin} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="Facebook" name="facebook" value={formInfo && formInfo.socialmedia.facebook} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="Instagram" name="instagram" value={formInfo && formInfo.socialmedia.instagram} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="TikTok" name="tiktok" value={formInfo && formInfo.socialmedia.tiktok} onChange={handleInputChange} />
                </form>
                <div className={styles['row']}>
                    <div style={{ width: '46%' }}>
                        <PrimaryButton onClick={saveForm} >Save Changes</PrimaryButton>
                    </div>
                    <div style={{ width: '46%' }}>
                    <Link to={`/profile/contacts/${props.id}`} style={{ width: '100%' }}> <SecondaryButton >Discard Changes</SecondaryButton></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditContactDetails