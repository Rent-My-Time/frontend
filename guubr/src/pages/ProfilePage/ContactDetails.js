
import * as styles from "./ProfilePage.module.css"

function ContactDetails(props) {

    //console.log(formInfo, "FORM")
    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <p>{props.formInfo.telephone}</p>

                <h3>Email</h3>
                <p>{props.formInfo.email}</p>
                <h3>Websites</h3>

                    <p>{props.formInfo.websites}</p>

                <h3>Offices</h3>

                <p>{props.formInfo.offices}</p>

                <h3>Social Media</h3>
                <div className={styles["row"]}>
                {Object.entries(props.formInfo.socialmedia).map(([key, val] )=> <p>{val}</p>)}
                </div>
                


            </div>
        </div>
    )
}

export default ContactDetails
