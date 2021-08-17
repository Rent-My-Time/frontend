
import * as styles from "./ProfilePage.module.css"
import { useContext } from "react"
import {ProfileContext}  from "../../ProfileContext"
function ContactDetails(props) {
    const [formInfo, setFormInfo]  = useContext(ProfileContext)
    console.log(formInfo)
    
    let array = []
    formInfo ? array = Object.entries(formInfo.socialmedia): array = []
    
    console.log(array, "FORM")
    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <p>{formInfo && formInfo.telephone}</p>

                <h3>Email</h3>
                <p>{formInfo && formInfo.email}</p>
                <h3>Websites</h3>

                    <p>{formInfo && formInfo.websites}</p>

                <h3>Offices</h3>

                <p>{formInfo && formInfo.offices}</p>

                <h3>Social Media</h3>
                <div className={styles["row"]}>
                {formInfo && array.map(([key, val] )=> <p>{val}</p>)}
                </div>
                


            </div>
        </div>
    )
}

export default ContactDetails
