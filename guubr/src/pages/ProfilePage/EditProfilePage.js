import * as styles from "./ProfilePage.module.css"
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import EditPersonalDetails from './EditPersonalDetails'
import EditContactDetails from './EditContactDetails'
import EditSpecialistFields from './EditSpecialistFields'
import EditAvailability from './EditAvailability'

import ProfilePage from "./ProfilePage"

function EditProfilePage() {

    return (
        <div>

        <Router>
            <Switch>
            <Route path="profile/:id/details" exact ><ProfilePage/></Route>
            <div className={styles['profile-page']}>
                <div className={styles['main-container']}>
                    <div className={styles['navigation-container']}>
                        <Link to="/edit-profile" className={styles['nav-link']}><h2>Personal<br />Details</h2></Link>
                        <Link to="/edit-contacts" className={styles['nav-link']}><h2>Contact<br />Details</h2></Link>
                        <Link to="/edit-skills" className={styles['nav-link']}><h2>Specialist<br />Fields</h2></Link>
                        <Link to="/edit-availability" className={styles['nav-link']}><h2>Availability</h2></Link>
                    </div>
                    <div className={styles['nav-selector']}></div>
                    <div className={styles['profile-form']}>
                        <Switch>
                            <Route path="/edit-profile" exact> <EditPersonalDetails/></Route>
                            <Route path="/edit-contacts" exact> <EditContactDetails /></Route>
                            <Route path="/edit-skills" exact ><EditSpecialistFields/> </Route>
                            <Route path="/edit-availability" exact ><EditAvailability/></Route>

                        </Switch>
                    </div>
                </div>
            </div>
            </Switch>
        </Router>
        </div>
    )
}

export default EditProfilePage
