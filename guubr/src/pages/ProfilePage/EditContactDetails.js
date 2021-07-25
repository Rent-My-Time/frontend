import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
function EditContactDetails(props) {
    const [formInfo, setformInfo] = useState([])

    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })
    }
    const saveForm = () => {
        const { telephone, email, websites, children, gender } = formInfo
        if (!telephone || !email || !websites || !children || !gender) return

    }

    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <form>
                    <PrimaryInput type="text" name="telephone" value={props.formInfo.telephone} onChange={handleInputChange} />
                </form>
                <h3>Email</h3>
                <form >
                    <PrimaryInput type="text" name="email" value={props.formInfo.email} onChange={handleInputChange} />
                </form>
                <h3>Websites</h3>
                <form className={styles['row']}>
                    <div style={{width: '76%'}} >
                    <PrimaryInput type="text" name="websites" value={props.formInfo.websites} onChange={handleInputChange} />
                    </div>

                    <div style={{width: '16%'}}><PrimaryButton>Add</PrimaryButton></div>

                </form>
                <h3>Offices</h3>
                <form className={styles['row']}>
                <div style={{width: '76%'}} >
                <PrimaryInput type="text" name="offices" value={props.formInfo.offices} onChange={handleInputChange} />
                </div>

                    <div style={{width: '16%'}}><PrimaryButton>Add</PrimaryButton></div>

                </form>
                <h3>Social Media</h3>
                <form >
                <i class="fab fa-youtube"></i>
                    <PrimaryInput type="text" name="socialmedia" value={formInfo.socialmedia} onChange={handleInputChange} />
                </form>
                <div className={styles['row']}>
                    <div style={{width: '46%'}}>
                    <PrimaryButton onClick={saveForm} >Save Changes</PrimaryButton>
                    </div>
                    <div style={{width: '46%'}}>
                    <SecondaryButton >Discard Changes</SecondaryButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditContactDetails
