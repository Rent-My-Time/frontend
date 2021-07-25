import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"

function Availability(props) {

    const boolToString = value => {
        let response = ""
        console.log(value)
        if (value) {
            response = "Yes"
        } else {
            response = "No"
        }
        return response
    }

    //console.log(formInfo, "FORM")
    return (
        <div className={styles['availability']}>
            <div className={styles['input-container']}>
                <h2>Hiring Options</h2>
                <div className={[styles['row'], styles["space-between"]].join(' ')}>
                    <div className={styles['two-column']}>
                        <h3>Level of Expertise</h3>
                        <div className={styles['form-row']}>
                            <p><span className={styles["bold-font"]}>Expert:</span>{boolToString(props.formInfo.expertise.expert)}</p>
                            <p><span className={styles["bold-font"]}>Intermediate:</span> {boolToString(props.formInfo.expertise.intermediate)}</p>
                            <p><span className={styles["bold-font"]}>Entry:</span> {boolToString(props.formInfo.expertise.entry)}</p>
                        </div>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Hourly Rate</h3>
                        <p>${props.formInfo.hourlyRate}/hr</p>
                    </div>
                </div>
                <div className={[styles['row'], styles["space-between"]].join(' ')}>
                    <div className={styles['two-column']}>
                        <h3>Networking</h3>
                        <p>{boolToString(props.formInfo.networking)}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Making New Friends</h3>
                        <p>{boolToString(props.formInfo.friends)}</p>
                    </div>
                </div>

                <h3>Other</h3>
                <p>{(props.formInfo.other)}</p>
                <h2>Contact Methods</h2>
                <div className={styles['form-row']}  style={{ marginTop:"16px" }}>
                    <p><span className={styles["bold-font"]}>Phone:</span>{boolToString(props.formInfo.contactMethods.phone)}</p>
                    <p><span className={styles["bold-font"]}>Email:</span> {boolToString(props.formInfo.contactMethods.email)}</p>
                    <p><span className={styles["bold-font"]}>Zoom:</span> {boolToString(props.formInfo.contactMethods.zoom)}</p>
                    <p><span className={styles["bold-font"]}>Other:</span> {props.formInfo.contactMethods.other}</p>
                </div>
            </div>

        </div>
    )
}

export default Availability
