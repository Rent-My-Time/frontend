import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import PrimaryInput from '../../components/reusableComponents/PrimaryInput';
function EditSpecialistFields(props) {
    const [formInfo, setformInfo] = useState([])

    useEffect(() => {
        setformInfo(data)

    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target
        setformInfo({ ...formInfo, [name]: value })
    }
    const submitSkill = clickEvent => {

    }
    const saveForm = () => {
        const { firstName, lastName, nationality, ageGroup, maritalStatus, children, gender, languages, city, country, education } = formInfo
        if (!firstName || !lastName || !nationality || !ageGroup || !maritalStatus || !children || !gender || !languages || !city || !country || !education) return
        //console.log(formInfo, " SAVE FORM")
    }
    const expertSkills = props.formInfo.skills.expert
    const intermediateSkills = props.formInfo.skills.intermediate
    const entrySkills = props.formInfo.skills.entry
    console.log(entrySkills)

    return (
        <div className={styles['specialist-fields']}>
            <div className={styles['input-container']}>
                <div className={[styles['row'], styles["space-between"]].join(' ')}>
                    <div style={{ width: '48%' }}>
                        <h2>Enter a Skill</h2>
                        <form className={styles['form-row']} style={{ marginBottom: '32px' }}>
                            <PrimaryInput type="text"  onChange={handleInputChange} />
                            <select className={styles['PrimarySelect']}>
                                <option value='expert'>Expert</option>
                                <option value='intermediate'>Intermediate</option>
                                <option value='entry'>Entry</option>
                            </select>
                        </form>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>

                    <div className={[styles['row'], styles["space-between"]].join(' ')} style={{ width: '48%' }}>
                        <div className={styles['three-column']}>
                            <h2>Expert</h2>
                            {expertSkills && expertSkills.map(skill => <p>{skill}</p>)}
                        </div>
                        <div className={styles['three-column']}>

                            <h2>Intermediate</h2>
                            {intermediateSkills && intermediateSkills.map(skill => <p>{skill}</p>)}
                        </div>
                        <div className={styles['three-column']}>
                            <h2>Entry</h2>
                            {entrySkills && entrySkills.map(skill => <p>{skill}</p>)}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EditSpecialistFields
