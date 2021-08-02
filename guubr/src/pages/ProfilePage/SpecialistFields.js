import { useContext } from "react"
import {ProfileContext}  from "../../ProfileContext"
import * as styles from "./ProfilePage.module.css"

function SpecialistFields() {
    const [formInfo]  = useContext(ProfileContext)
    //console.log(formInfo, "FORM")
    return (
        <div className={styles['specialist-fields']}>
            <div className={styles['input-container']}>
                <div className={[styles['row'], styles["space-between"]].join(' ')}>
                    <div className={styles["three-column"]}>
                        <h3>Expert Skills</h3>
                        {formInfo.skills.expert.map(skill => <p>{skill}</p>)}
                    </div>

                    <div className={styles["three-column"]}>
                        <h3>Intermediate Skills</h3>
                        {formInfo.skills.intermediate.map(skill => <p>{skill}</p>)}
                    </div>
                    <div className={styles["three-column"]}>
                        <h3>Entry Skills</h3>
                        {formInfo.skills.entry.map(skill => <p>{skill}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialistFields
