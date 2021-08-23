import { useContext } from "react"
import {ProfileContext}  from "../../ProfileContext"
import * as styles from "./ProfilePage.module.css"

function SpecialistFields(props) {
    const [formInfo, setFormInfo]  = useContext(ProfileContext)
    console.log(formInfo, "FORM")
    return (
        <div className={styles['specialist-fields']}>
            <div className={styles['input-container']}>
                <div className={[styles['form-row'], styles["space-between"]].join(' ')}>
                    <div className={styles["three-column"]}>
                        <h3>Expert Skills</h3>
                        {formInfo && formInfo.skills.expert.length !== 0 ? formInfo.skills.expert.map(skill => <p style={{padding:"8px 16px",textAlign:"center", border: "2px solid lightgrey"}}>{skill}</p>) : "No expert skills available"}
                    </div>

                    <div className={styles["three-column"]}>
                        <h3>Intermediate Skills</h3>
                        {formInfo && formInfo.skills.intermediate.length !== 0 ? formInfo.skills.intermediate.map(skill => <p style={{padding:"8px 16px",textAlign:"center", border: "2px solid lightgrey"}}>{skill}</p>): "No intermediate skills available"}
                    </div>
                    <div className={styles["three-column"]}>
                        <h3>Entry Skills</h3>
                        {formInfo && formInfo.skills.entry.length !== 0 ? formInfo.skills.entry.map(skill => <p style={{padding:"8px 16px",textAlign:"center", border: "2px solid lightgrey"}}>{skill}</p>) : "No entry skills available"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialistFields
