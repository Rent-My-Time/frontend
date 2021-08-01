import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";
import PrimaryTextArea from "../../components/reusableComponents/PrimaryTextArea";
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
function EditContactDetails(props) {
    const [formInfo, setformInfo] = useState(props.formInfo)

    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })
        if (name === "youtube" || name === "instagram" || name === "facebook" || name === "tiktok" || name === "linkedin") {
            formInfo.socialmedia = value
            setformInfo({ ...formInfo, [name]: value })
        }
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
        setformInfo(formInfo)
        console.log(formInfo)

    }

    return (
        <div className={styles['contact-details']}>
            <div className={styles['input-container']}>
                <h3>Telephone</h3>
                <form>
                    <PrimaryInput type="text" name="telephone" value={formInfo.telephone} onChange={handleInputChange} />
                </form>
                <h3>Email</h3>
                <form >
                    <PrimaryInput type="text" name="email" value={formInfo.email} onChange={handleInputChange} />
                </form>
                <h3>Websites</h3>
                <form className={styles['row']}>
                    <div style={{ width: '76%' }} >
                        <PrimaryInput type="text" name="websites" value={formInfo.websites} onChange={handleInputChange} />
                    </div>

                    <div style={{ width: '16%' }}><PrimaryButton>Add</PrimaryButton></div>

                </form>
                <h3>Offices</h3>
                <form className={styles['row']}>
                    <div style={{ width: '76%' }} >
                        <PrimaryInput type="text" name="offices" value={formInfo.offices} onChange={handleInputChange} />
                    </div>

                    <div style={{ width: '16%' }}><PrimaryButton>Add</PrimaryButton></div>

                </form>
                <h3>Social Media</h3>
                <form >

                    <PrimaryInput type="text" placeholder="Youtube" name="youtube" value={formInfo.socialmedia.youtube} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="LinkedIn" name="linkedin" value={formInfo.socialmedia.linkedin} onChange={handleInputChange} />
                    <PrimaryInput type="text"placeholder="Facebook"  name="facebook" value={formInfo.socialmedia.facebook} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="Instagram" name="instagram" value={formInfo.socialmedia.instagram} onChange={handleInputChange} />
                    <PrimaryInput type="text" placeholder="TikTok" name="tiktok" value={formInfo.socialmedia.tiktok} onChange={handleInputChange} />
                </form>
                <div className={styles['row']}>
                    <div style={{ width: '46%' }}>
                        <PrimaryButton onClick={saveForm} >Save Changes</PrimaryButton>
                    </div>
                    <div style={{ width: '46%' }}>
                        <SecondaryButton >Discard Changes</SecondaryButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditContactDetails
