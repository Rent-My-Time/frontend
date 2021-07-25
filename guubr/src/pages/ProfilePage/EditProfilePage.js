import React, { useState, useEffect } from 'react'
import * as styles from "./ProfilePage.module.css"
import data from '../../data.json'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import EditPersonalDetails from './EditPersonalDetails'
import EditContactDetails from './EditContactDetails'
import EditSpecialistFields from './EditSpecialistFields'
import EditAvailability from './EditAvailability'
function EditProfilePage() {
    const [formInfo, setformInfo] = useState([])
    useEffect(() => {
        setformInfo(data)
    }, [])
    return (
        <Router>
            <div className={styles['profile-page']}>
                <div className={styles['main-container']}>
                    <div className={styles['navigation-container']}>
                        <Link to="/edit-profile" className={styles['nav-link']}><h1>Personal<br />Details</h1></Link>
                        <Link to="/edit-contacts" className={styles['nav-link']}><h1>Contact<br />Details</h1></Link>
                        <Link to="/edit-skills" className={styles['nav-link']}><h1>Specialist<br />Fields</h1></Link>
                        <Link to="/edit-availability" className={styles['nav-link']}><h1>Availability</h1></Link>
                    </div>
                    <div className={styles['nav-selector']}></div>
                    <div className={styles['profile-form']}>
                        <Switch>
                            <Route path="/edit-profile" exact> <EditPersonalDetails formInfo={formInfo}/></Route>
                            <Route path="/edit-contacts" exact> <EditContactDetails formInfo={formInfo}/></Route>
                            <Route path="/edit-skills" exact ><EditSpecialistFields formInfo={formInfo}/> </Route>
                            <Route path="/edit-availability" exact ><EditAvailability formInfo={formInfo}/></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default EditProfilePage
