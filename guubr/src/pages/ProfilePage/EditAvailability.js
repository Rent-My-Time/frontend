import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import PrimaryInput from "../../components/reusableComponents/PrimaryInput";
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
function EditAvailability(props) {
    const [formInfo, setformInfo] = useState(props.formInfo)

    useEffect(() => {
        setformInfo(formInfo)
    }, [])

    const handleInputChange = event => {
        const target = event.target
        const name = target.name;
        console.log(target)
        switch (name) {
            case 'expert':
            case 'entry':
            case 'intermediate':
                formInfo.expertise[name] = target.checked;
                console.log(target.type, name )
                break;
            case 'phone':
            case 'email':
            case 'zoom':
            case 'office':
                formInfo.contactMethods[name] = target.checked;
                console.log(target.type, name )
                break;
            default:
        }
        const value = target.value;
        setformInfo({ ...formInfo, [name]: value })
        console.log(formInfo)
    }
    const saveForm = () => {
        const { expertise, hourlyRate, networking, friends, other, contactMethods } = formInfo
        // const { expert, intermediate, entry } = expertise
        if (!expertise || !hourlyRate || !networking || !friends || !other || !contactMethods) return
        setformInfo(formInfo)
        console.log(formInfo, " SAVE FORM")

    }
    //console.log(formInfo, "FORM") 
    return (
        <div className={styles['availability']}>
            <div className={styles['input-container']}>
                <h2>Hiring Options</h2>
                <form className={styles["form-row"]}>
                    <div className={styles["row"]} style={{ marginTop: '16px', alignItems: "center", width: "50%" }}>
                        <label>
                            <input style={{ margin: '8px 16px' }} type="checkbox" name="expert" checked={formInfo.expertise.expert} onChange={handleInputChange} />
                            Expert
                        </label>
                        <label>
                            <input style={{ margin: '8px 16px' }} type="checkbox" name="intermediate" checked={formInfo.expertise.intermediate} onChange={handleInputChange} />
                            Intermediate
                        </label>
                        <label>
                            <input style={{ margin: '8px 16px' }} type="checkbox" name="entry" checked={formInfo.expertise.entry} onChange={handleInputChange} />
                            Entry
                        </label>
                    </div>

                    <div className={styles["row"]} style={{ justifyContent: 'space-between', width: "50%", alignItems: "center" }}>
                        <div style={{ width: '22%' }}>
                            <h3 style={{ marginBottom: '0px' }} >Hourly Rate:</h3>
                            <PrimaryInput style={{ marginTop: '0px' }} name="hourlyRate" value={formInfo.hourlyRate} onChange={handleInputChange} />
                        </div>
                        <h2 style={{ paddingTop: '24px' }}>-</h2>
                        <div style={{ width: '22%' }}>
                            <h3 style={{ marginBottom: '0px' }} >Service Fee:</h3>
                            <PrimaryInput style={{ marginTop: '0px' }} disabled={true} value={"0"} onChange={handleInputChange} />
                        </div>
                        <h2 style={{ paddingTop: '24px' }}>=</h2>
                        <div style={{ width: '22%' }}>
                            <h3 style={{ marginBottom: '0px' }} >Funds Received:</h3>
                            <PrimaryInput disabled={true} value={formInfo.hourlyRate} onChange={handleInputChange} />
                        </div>
                        <h2 style={{ paddingTop: '24px' }} >$/hr</h2>
                    </div>

                </form>
                <h3>Networking</h3>
                <select name="networking" value={formInfo.networking} className={styles['PrimarySelect']} onChange={handleInputChange}>
                    <option value={true}>Open to networking with others.</option>
                    <option value={false}>Not open to network.</option>
                </select>
                <h3>Making New Friends</h3>
                <select name="friends" value={formInfo.friends} className={styles['PrimarySelect']} onChange={handleInputChange}>
                    <option value={true}>Open to making friends.</option>
                    <option value={false}>Strictly business.</option>
                </select>
                <h3>Other</h3>
                <PrimaryInput name="other" value={formInfo.other} onChange={handleInputChange} />
                <h2>Contact Methods</h2>
                <div className={styles["row"]} style={{ width: "50%", marginTop: '16px', alignItems: "center", justifyContent: "space-between" }}>
                    <label>
                        <input style={{ margin: '8px 16px' }} type="checkbox" name="phone" checked={formInfo.contactMethods.phone} onChange={handleInputChange} />
                        Phone
                    </label>
                    <label>

                        <input style={{ margin: '8px 16px' }} type="checkbox" name="email" checked={formInfo.contactMethods.email} onChange={handleInputChange} />
                        Email
                    </label>
                    <label>
                        <input style={{ margin: '8px 16px' }} type="checkbox" name="zoom" checked={formInfo.contactMethods.zoom} onChange={handleInputChange} />
                        Zoom
                    </label>
                    <label>
                        <input style={{ margin: '8px 16px' }} type="checkbox" name="office" checked={formInfo.contactMethods.office} onChange={handleInputChange} />
                        Office
                    </label>



                </div>
                <div className={styles['row']} style={{ justifyContent: "space-between", marginTop: "64px" }}>
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

export default EditAvailability
