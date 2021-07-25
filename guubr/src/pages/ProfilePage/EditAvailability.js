import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
function EditAvailability(props) {
    const [formInfo, setformInfo] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    useEffect(() => {
        setformInfo(data)
        setProfileInfo(data)
    }, [])
    console.log(profileInfo)
    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })
    }
    const saveForm = () => {
        const { firstName, lastName, nationality, ageGroup, maritalStatus, children, gender, languages, city, country, education } = formInfo
        if (!firstName || !lastName || !nationality || !ageGroup || !maritalStatus || !children || !gender || !languages || !city || !country || !education) return
        //console.log(formInfo, " SAVE FORM")
    }
    //console.log(formInfo, "FORM")
    return (
        <div className={styles['availability']}>
            <div className={styles['input-container']}>
                <h2>Hiring Options</h2>
                <form className={styles["form-row"]}>
                    <div className={styles["row"]} style={{ marginTop: '16px', alignItems: "center", width: "50%" }}>
                        <label>
                            <input style={{ marginRight: '16px' }} type="checkbox" name="expert" value={props.formInfo.firstName} onChange={handleInputChange} />
                            Expert
                        </label>
                        <label>

                            <input style={{ margin: '0px 16px' }} type="checkbox" name="intermediate" value={props.formInfo.firstName} onChange={handleInputChange} />
                            Intermediate
                        </label>
                        <label>
                            <input style={{ margin: '0px 16px' }} type="checkbox" name="entry" value={props.formInfo.firstName} onChange={handleInputChange} />
                            Entry
                        </label>
                    </div>

                    <div className={styles["row"]} style={{ marginTop: '16px', justifyContent: 'space-between', width: "50%", alignItems: "center" }}>
                        <div style={{ width: '22%' }}>
                            <h3>Hourly Rate:</h3>
                            <PrimaryInput />
                        </div>
                        <h2>-</h2>
                        <div style={{ width: '22%' }}>
                            <h3>Service Fee:</h3>
                            <PrimaryInput />
                        </div>
                        <h2>=</h2>
                        <div style={{ width: '22%' }}>
                            <h3>Funds Received:</h3>
                            <PrimaryInput />
                        </div>
                    </div>

                </form>
                <h3>Networking</h3>
                <PrimaryInput />
                <h3>Making New Friends</h3>
                <PrimaryInput />
                <h3>Other</h3>
                <PrimaryInput />
                <h2>Contact Methods</h2>
                <div className={styles["row"]} style={{ marginTop: '16px', alignItems: "center", justifyContent: "space-between" }}>
                    <label>
                        <input style={{ marginRight: '16px' }} type="checkbox" name="expert" value={props.formInfo.firstName} onChange={handleInputChange} />
                        Phone
                    </label>
                    <label>

                        <input style={{ margin: '0px 16px' }} type="checkbox" name="intermediate" value={props.formInfo.firstName} onChange={handleInputChange} />
                        Email
                    </label>
                    <label>
                        <input style={{ margin: '0px 16px' }} type="checkbox" name="entry" value={props.formInfo.firstName} onChange={handleInputChange} />
                        Zoom
                    </label>
                    <label>
                        <input style={{ margin: '0px 16px' }} type="checkbox" name="expert" value={props.formInfo.firstName} onChange={handleInputChange} />
                        Office
                    </label>
                    <label>
                        <input style={{ margin: '0px 16px' }} type="checkbox" name="expert" value={props.formInfo.firstName} onChange={handleInputChange} />
                        Other

                    </label>
                    <div style={{ marginLeft: "16px", width: '42%' }}>
                        <PrimaryInput />
                    </div>

                </div>
                <div className={styles['row']} style={{justifyContent:"space-between", marginTop:"64px"}}>
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

export default EditAvailability
