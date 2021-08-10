import React from 'react'
import * as styles from "./ProfilePage.module.css"
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import PersonalDetails from './PersonalDetails'
import EditProfilePage from './EditProfilePage'
import ContactDetails from './ContactDetails'
import SpecialistFields from './SpecialistFields'
import Availability from './Availability'
import ProfileContextProvider from '../../ProfileContext'

function ProfilePage() {
    let { id } = useParams();
    console.log(id)
    let { path, url } = useRouteMatch()



    return (
        <ProfileContextProvider >
            <Router>
                <Switch>
                    <Route path="/edit-profile" exact component={EditProfilePage} />
                    <div className={styles['profile-page']}>
                        <div className={styles['main-container']}>
                            <div className={styles['navigation-container']}>
                                <Link to={`${url}`} className={styles['nav-link']}><h2>Personal<br />Details</h2></Link>
                                <Link to={`/profile/contacts/${id}`} className={styles['nav-link']}><h2>Contact<br />Details</h2></Link>
                                <Link to={`/profile/skills/${id}`} className={styles['nav-link']}><h2>Specialist<br />Fields</h2></Link>
                                <Link to={`/profile/availability/${id}`} className={styles['nav-link']}><h2>Availability</h2></Link>
                            </div>
                            <div className={styles['nav-selector']}></div>
                            <div className={styles['profile-form']}>
                                <Route exact path={`/profile/details/:id`} ><PersonalDetails /></Route>
                                <Route exact path={`/profile/contacts/:id`} ><ContactDetails /></Route>
                                <Route exact path={`/profile/skills/:id`} ><SpecialistFields /></Route>
                                <Route exact path={`/profile/availability/:id`} ><Availability /></Route>
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </ProfileContextProvider>
    )
}
export default ProfilePage
