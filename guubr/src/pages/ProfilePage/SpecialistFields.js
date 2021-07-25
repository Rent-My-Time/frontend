import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
function SpecialistFields(props) {

    //console.log(formInfo, "FORM")
    return (
        <div className={styles['specialist-fields']}>
            <div className={styles['input-container']}>
                <div className={[styles['row'], styles["space-between"]].join(' ')}>
                    <div className={styles["three-column"]}>
                        <h3>Expert Skills</h3>
                        {props.formInfo.skills.expert.map(skill => <p>{skill}</p>)}
                    </div>

                    <div className={styles["three-column"]}>
                        <h3>Intermediate Skills</h3>
                        {props.formInfo.skills.intermediate.map(skill => <p>{skill}</p>)}
                    </div>
                    <div className={styles["three-column"]}>
                        <h3>Entry Skills</h3>
                        {props.formInfo.skills.entry.map(skill => <p>{skill}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialistFields
