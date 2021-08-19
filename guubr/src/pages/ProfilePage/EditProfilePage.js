import * as styles from "./ProfilePage.module.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import EditPersonalDetails from './EditPersonalDetails'
import EditContactDetails from './EditContactDetails'
import EditSpecialistFields from './EditSpecialistFields'
import EditAvailability from './EditAvailability'

import ProfilePage from "./ProfilePage"
import ProfileContextProvider from "../../ProfileContext"

function EditProfilePage() {
    let { id } = useParams();
    let { path, url } = useRouteMatch()
    return (
        <div>
            <ProfileContextProvider>
                <Route path="/profile/details/:id" exact ><ProfilePage /></Route>
                <Route path="/profile/contacts/:id" exact ><ProfilePage /></Route>
                <Route path="/profile/skills/:id" exact ><ProfilePage /></Route>
                <Route path="/profile/availability/:id" exact ><ProfilePage /></Route>
                <div className={styles['profile-page']}>
                    <div className={styles['main-container']}>
                        <div className={styles['navigation-container']}>
                            <Link to={`/edit-profile/details/${id}`} className={styles['nav-link']}><h2>Personal<br />Details</h2></Link>
                            <Link to={`/edit-profile/contacts/${id}`} className={styles['nav-link']}><h2>Contact<br />Details</h2></Link>
                            <Link to={`/edit-profile/skills/${id}`} className={styles['nav-link']}><h2>Specialist<br />Fields</h2></Link>
                            <Link to={`/edit-profile/availability/${id}`} className={styles['nav-link']}><h2>Availability</h2></Link>
                        </div>
                        <div className={styles['nav-selector']}></div>
                        <div className={styles['profile-form']}>

                            <Route path="/edit-profile/details/:id" exact> <EditPersonalDetails id={id} /></Route>
                            <Route path="/edit-profile/contacts/:id" exact> <EditContactDetails id={id} /></Route>
                            <Route path="/edit-profile/skills/:id" exact ><EditSpecialistFields id={id} /> </Route>
                            <Route path="/edit-profile/availability/:id" exact ><EditAvailability id={id} /></Route>

                        </div>
                    </div>
                </div>
            </ProfileContextProvider>
        </div>

    )
}

export default EditProfilePage
