
import * as styles from "./ProfilePage.module.css"
import { useContext } from "react"
import { ProfileContext } from "../../ProfileContext"
function ContactDetails(props) {
    const [formInfo, setFormInfo] = useContext(ProfileContext)
    console.log(formInfo)

    let array = []
    formInfo ? array = Object.entries(formInfo.socialmedia) : array = []

    console.log(array, "FORM")
    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>


                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Telephone</h3>
                        <p>{formInfo && formInfo.telephone ? formInfo.telephone : `Not Specified`}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Email</h3>
                        <p>{formInfo && formInfo.email ? formInfo.email : `Not Specified`}</p>
                    </div>

                </div>
                <div className={styles['form-row']} style={{ borderBottom: "2px solid lightgrey", marginBottom: "16px", paddingBottom: "16px" }}>
                    <div className={styles['column']}>
                        <h3>Offices</h3>
                        <p>{formInfo && formInfo.offices ? formInfo.offices : `Not Specified`}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Facebook</h3>
                        <p>{formInfo.socialmedia.facebook !== "" ? formInfo.socialmedia.facebook : `Not Specified`}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Instagram</h3>
                        <p>{formInfo.socialmedia.instagram !== "" ? formInfo.socialmedia.instagram : `Not Specified`}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>LinkedIn</h3>
                        <p>{formInfo.socialmedia.linkedin !== "" ? formInfo.socialmedia.linkedin : `Not Specified`}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>TikTok</h3>
                        <p>{formInfo.socialmedia.tiktok !== "" ? formInfo.socialmedia.tiktok : `Not Specified`}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Youtube</h3>
                        <p>{formInfo.socialmedia.youtube !== "" ? formInfo.socialmedia.youtube : `Not Specified`}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Websites</h3>
                        <p>{formInfo && formInfo.websites ? formInfo.websites : `Not Specified`}</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default ContactDetails
