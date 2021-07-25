import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SecondaryButton from "../../components/reusableComponents/SecondaryButton";
import PrimaryButton from "../../components/reusableComponents/PrimaryButton";
import ProfileWrapper from "../../components/reusableComponents/ProfileWrapper";

function PersonalDetails(props) {


    return (
        <div className={styles['personal-details']}>
            <div className={styles['input-container']}>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Name</h3>
                        <p>{props.formInfo.firstName} {props.formInfo.lastName}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Nationality</h3>
                        <p>{props.formInfo.nationality}</p>
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Age Group</h3>
                        <p>{props.formInfo.ageGroup}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Marital Status</h3>
                        <p>{props.formInfo.maritalStatus}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Children</h3>
                        <p>{props.formInfo.children}</p>
                    </div>
                    <div className={styles['two-column']}>
                        <h3>Gender</h3>
                        <p>{props.formInfo.gender}</p>
                    </div>
                </div>
                <div className={styles['form-row']}>
                    <div className={styles['two-column']}>
                        <h3>Languages</h3>
                        <div className={styles['row']}>
                            {props.formInfo.languages && props.formInfo.languages.map(language => (<p>{language}</p>))}</div>
                    </div>

                    <div className={styles['two-column']}>
                        <h3>Location</h3>
                        <p>{props.formInfo.city}, {props.formInfo.country}</p>
                    </div>
                </div>
                <h3>Education</h3>
                <p>{props.formInfo.education}</p>
            </div>
            <div className={styles['button-container']}>
                <div className={styles['row']}>
                    <Link to="/edit-portrait" style={{ width: '46%'}}><SecondaryButton>Portrait</SecondaryButton></Link>
                    
                    <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link>
                </div>

                <ProfileWrapper

                    name={props.formInfo.profileName}
                    experties={props.formInfo.occupation}
                    rate={props.formInfo.hourlyRate}
                    photo={props.formInfo.profileImage}
                />
                <Link to="/edit-profile" style={{ width: '100%', marginBottom: "16px" }}><SecondaryButton>Edit Profile</SecondaryButton></Link>

                <Link to="/book-specialist" style={{ width: '100%' }}><PrimaryButton>Book</PrimaryButton></Link>


            </div>
        </div>
    )
}

export default PersonalDetails
