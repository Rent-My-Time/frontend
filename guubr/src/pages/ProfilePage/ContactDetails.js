
import * as styles from "./ProfilePage.module.css"
import { useContext } from "react"
import {ProfileContext}  from "../../ProfileContext"
function ContactDetails() {
    const [formInfo]  = useContext(ProfileContext)
    //console.log(formInfo, "FORM")
    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <p>{formInfo.telephone}</p>

                <h3>Email</h3>
                <p>{formInfo.email}</p>
                <h3>Websites</h3>

                    <p>{formInfo.websites}</p>

                <h3>Offices</h3>

                <p>{formInfo.offices}</p>

                <h3>Social Media</h3>
                <div className={styles["row"]}>
                {Object.entries(formInfo.socialmedia).map(([key, val] )=> <p>{val}</p>)}
                </div>
                


            </div>
        </div>
    )
}

export default ContactDetails
