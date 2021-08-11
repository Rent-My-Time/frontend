import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import { Link } from 'react-router-dom';
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import PrimaryInput from '../../components/reusableComponents/PrimaryInput';
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import { useContext } from "react"
import firebase from "../../firebase";
import {ProfileContext}  from "../../ProfileContext"
function EditSpecialistFields(props) {
    const [formInfo, setFormInfo]  = useContext(ProfileContext)
    const [skillsList, setSkillsList] = useState(formInfo ? formInfo.skills : {})
    const [expertSkills, setExpertSkills] = useState(formInfo ? formInfo.skills.expert : {})
    const [intermediateSkills, setIntermediateSkills] = useState(formInfo ? formInfo.skills.intermediate: {})
    const [entrySkills, setEntrySkills] = useState(formInfo ? formInfo.skills.entry : {})
    const [skill, setSkill] = useState('')
    const [level, setLevel] = useState("expert")
    let message = '';
    const db = firebase.firestore();
    const docRef = db.collection("users").doc(`${props.id}`);


    // useEffect(() => {
    //     setIntermediateSkills(intermediateSkills)
    //     setExpertSkills(expertSkills)
    //     setEntrySkills(entrySkills)
    // }, [])

    useEffect(() => {
        
    }, [skill])

    const handleInputChange = e => {
        setSkill(e.target.value.replace(/[^\w\s]/gi, ''));
    }

    const handleSelectChange = e => {
        setLevel(e.target.value);
    }
    const handleDelete = e => {

        let skillValue = e.target.value
        skillsList.entry = entrySkills.filter(item => item !== skillValue)
        skillsList.expert = expertSkills.filter(item => item !== skillValue)
        skillsList.intermediate = intermediateSkills.filter(item => item !== skillValue)
        setSkillsList(skillsList)
        setEntrySkills(skillsList.entry)
        setExpertSkills(skillsList.expert)
        setIntermediateSkills(skillsList.intermediate)
        // console.log(skillsList)


    }
    const saveForm = () => {
        console.log(skillsList, "HELLO SAVE FORM")
        formInfo.skills = skillsList
        setFormInfo(formInfo)
        console.log(formInfo)
        docRef.set(formInfo)
    }

    const handleKeyPress = e => {
        //it triggers by pressing the enter key
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
            submitSkill();
        }
    };


    const checkSkillExists = (skill) => {
        let trimSkill = skill.trim()

        if (expertSkills.indexOf(trimSkill) !== -1) {

            message = `${trimSkill} already exists!`
            return true
        } else if (intermediateSkills.indexOf(trimSkill) !== -1) {
            message = `${trimSkill} already exists!`
            return true
        } else if (entrySkills.indexOf(trimSkill) !== -1) {
            message = `${trimSkill} already exists!`
            return true

        } else if (trimSkill === '') {
            message = "You need to add a skill!"
            return true
        } else {
            message = `${trimSkill} has been added!`
            return false
        }

    }

    const submitSkill = () => {

        setSkill(skill);
        if (checkSkillExists(skill)) {
            alert(message)
        } else {

            if (level === "expert") {
                let newExpertSkills = expertSkills.push(skill);
                setExpertSkills(newExpertSkills)
                skillsList.expert = expertSkills
                alert(message)
            }

            else if (level === "intermediate") {
                let newInterSkills = intermediateSkills.push(skill);
                setIntermediateSkills(newInterSkills)
                skillsList.intermediate = intermediateSkills
                alert(message)
            }
            else if (level === "entry") {
                let newEntrySkills = entrySkills.push(skill);
                setEntrySkills(newEntrySkills)
                skillsList.entry = entrySkills
                alert(message)
            }

            setIntermediateSkills(intermediateSkills)
            setExpertSkills(expertSkills)
            setEntrySkills(entrySkills)
            setSkill('')
            setSkillsList(skillsList)

        }

    }



    return (
        <div className={styles['specialist-fields']}>
            <div className={styles['input-container']}>
                <div className={[styles['row'], styles["space-between"]].join(' ')} style={{ margin: "24px 0px" }}>
                    <div style={{ width: '28%' }}>
                        <h2>Enter a Skill</h2>
                        <form className={styles['form-row']} style={{ marginBottom: '32px' }}>
                            <PrimaryInput type="text" placeholder={"enter a skill"} value={skill} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                            <select value={level} className={styles['PrimarySelect']} onChange={handleSelectChange} style={{ width: "128px" }}>
                                <option value='expert'>Expert</option>
                                <option value='intermediate'>Intermediate</option>
                                <option value='entry'>Entry</option>
                            </select>
                        </form>


                    </div>
                    <div className={styles['column']} style={{ width: '67%' }}>
                        <div className={[styles['row'], styles["space-between"]].join(' ')}>

                            <div className={styles['three-column']} style={{ alignItems: "center", border: "2px solid lightgrey", padding: "12px 16px" }}>

                                <h2>Expert</h2>

                                {skillsList.expert && skillsList.expert.map(skillMap => <button value={skillMap} onClick={handleDelete} className={styles['delete-button']}>{skillMap}</button>)}

                            </div>
                            <div className={styles['three-column']} style={{ alignItems: "center", border: "2px solid lightgrey", padding: "12px 16px" }}>

                                <h2>Intermediate</h2>

                                {skillsList.intermediate && skillsList.intermediate.map(skillMap => <button value={skillMap} onClick={handleDelete} className={styles['delete-button']}>{skillMap}</button>)}

                            </div>
                            <div className={styles['three-column']} style={{ alignItems: "center", border: "2px solid lightgrey", padding: "12px 16px" }}>

                                <h2>Entry</h2>

                                {skillsList.entry && skillsList.entry.map(skillMap => <button value={skillMap} onClick={handleDelete} className={styles['delete-button']}>{skillMap}</button>)}

                            </div>
                        </div>
                    </div>
                </div>

                <div className={[styles['row'], styles["space-between"]].join(' ')} style={{ alignItems: "flex-end" }}>
                    <PrimaryButton style={{ width: "12%" }} type="submit" onClick={submitSkill}>Submit</PrimaryButton>
                    <div className={styles['column']} style={{ width: "20%" }}>
                        < PrimaryButton onClick={saveForm} style={{ marginBottom: "16px" }}>Save Changes</ PrimaryButton>
                        <Link to={`/profile/skills/${props.id}`} style={{ width: '100%' }}><SecondaryButton>Discard Changes</SecondaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSpecialistFields
