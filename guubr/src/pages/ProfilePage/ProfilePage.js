import React from 'react'
import * as styles from "./ProfilePage.module.css"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PersonalDetails from './PersonalDetails'
import EditProfilePage from './EditProfilePage'
import ContactDetails from './ContactDetails'
import SpecialistFields from './SpecialistFields'
import Availability from './Availability'
import ProfileContextProvider from '../../ProfileContext'
function ProfilePage() {

    return (
        <ProfileContextProvider>
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
                                <Route path="/my-info" exact><PersonalDetails /></Route>
                                <Route path="/my-contacts" exact><ContactDetails /></Route>
                                <Route path="/my-skills" exact><SpecialistFields /></Route>
                                <Route path="/availability" exact><Availability /></Route>
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </ProfileContextProvider>
    )
}

export default ProfilePage
