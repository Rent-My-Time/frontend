import { useContext } from 'react';
import * as styles from './ProfilePage.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import EditProfilePage from './EditProfilePage';
import ContactDetails from './ContactDetails';
import SpecialistFields from './SpecialistFields';
import Availability from './Availability';
import ProfileContextProvider from '../../ProfileContext';
import BookingPage from '../BookingPage';
import PaymentPage from '../PaymentPage/PaymentPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IconFooter from '../../components/IconFooter';
import { ReactComponent as IconHouse } from '../../assets/home_house_icon.svg';

function ProfilePage() {
  let { id } = useParams();
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  return (
    <ProfileContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route
            path="/edit-profile/details/:id"
            exact
            component={EditProfilePage}
          />
          <Route path="/book/:id" exact>
            <BookingPage id={id} />
          </Route>
          <Route path="/payment/" exact>
            <PaymentPage id={id} />
          </Route>
          <div className={styles['profile-page']}>
            <div className={styles['main-container']}>
              <div className={styles['navigation-container']}>
                <Link
                  to={`/profile/details/${id}`}
                  className={styles['nav-link']}
                >
                  <h2 className={styles['nav-text']}>Personal Details</h2>
                </Link>
                <Link
                  to={`/profile/contacts/${id}`}
                  className={styles['nav-link']}
                >
                  <h2 className={styles['nav-text']}>Contact Details</h2>
                </Link>
                <Link
                  to={`/profile/skills/${id}`}
                  className={styles['nav-link']}
                >
                  <h2 className={styles['nav-text']}>Specialist Fields</h2>
                </Link>
                <Link
                  to={`/profile/availability/${id}`}
                  className={styles['nav-link']}
                >
                  <h2 className={styles['nav-text']}>Availability</h2>
                </Link>

                <IconHouse
                  style={{
                    width: '24px',
                    alignSelf: 'start',
                    cursor: 'pointer',
                  }}
                  onClick={goBack}
                />
              </div>

              <div className={styles['profile-form']}>
                <Route exact path={`/profile/details/:id`}>
                  <PersonalDetails id={id} />
                </Route>
                <Route exact path={`/profile/contacts/:id`}>
                  <ContactDetails id={id} />
                </Route>
                <Route exact path={`/profile/skills/:id`}>
                  <SpecialistFields id={id} />
                </Route>
                <Route exact path={`/profile/availability/:id`}>
                  <Availability id={id} />
                </Route>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
      <Footer />
      <IconFooter />
    </ProfileContextProvider>
  );
}
export default ProfilePage;