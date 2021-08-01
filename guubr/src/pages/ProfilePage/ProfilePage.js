import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PersonalDetails from './PersonalDetails'
import EditProfilePage from './EditProfilePage'
import ContactDetails from './ContactDetails'
import SpecialistFields from './SpecialistFields'
import Availability from './Availability'
function ProfilePage() {
    const [formInfo, setformInfo] = useState([])
    useEffect(() => {
        setformInfo(data)
    }, [])
    return (
        <Router>
            <Switch>
                <Route path="/edit-profile" exact component={EditProfilePage} />
                <div className={styles['profile-page']}>
                    <div className={styles['main-container']}>
                        <div className={styles['navigation-container']}>
                            <Link to="/my-info" className={styles['nav-link']}><h2>Personal<br />Details</h2></Link>
                            <Link to="/my-contacts" className={styles['nav-link']}><h2>Contact<br />Details</h2></Link>
                            <Link to="/my-skills" className={styles['nav-link']}><h2>Specialist<br />Fields</h2></Link>
                            <Link to="/availability" className={styles['nav-link']}><h2>Availability</h2></Link>
                        </div>
                        <div className={styles['nav-selector']}></div>
                        <div className={styles['profile-form']}>
                            <Route path="/my-info" exact><PersonalDetails formInfo={formInfo} /></Route>
                            <Route path="/my-contacts" exact><ContactDetails formInfo={formInfo} /></Route>
                            <Route path="/my-skills" exact><SpecialistFields formInfo={formInfo} /></Route>
                            <Route path="/availability" exact><Availability formInfo={formInfo} /></Route>
                        </div>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default ProfilePage
