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

import ContactDetails from './ContactDetails';
import SpecialistFields from './SpecialistFields';
import Availability from './Availability';
import EditPersonalDetails from './EditPersonalDetails'
import EditContactDetails from './EditContactDetails'
import EditSpecialistFields from './EditSpecialistFields'
import EditAvailability from './EditAvailability'
import ProfileContextProvider from '../../ProfileContext';
import BookingPage from '../BookingPage';
import PaymentPage from '../PaymentPage/PaymentPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IconFooter from '../../components/IconFooter';
import { ReactComponent as IconHouse } from '../../assets/home_house_icon.svg';
import { MyContext } from '../../Context';
function ProfilePage() {
  const { user } = useContext(MyContext);
  let { id } = useParams();
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  console.log(user)
  return (
    <ProfileContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route path="/book/:id" exact>
            <BookingPage id={id} />
          </Route>
          <Route path="/payment/" exact>
            <PaymentPage id={id} />
          </Route>
          
          <div className={styles['profile-page']}>
            <div className={styles['main-container']}>
              <div className={styles['navigation-container']}>


                {(user && user.email) !== id ?
                  <Link to={`/profile/details/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Personal Details</h2>
                  </Link> :
                  <Link to={`/edit-profile/details/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Personal Details</h2>
                  </Link>}


                {(user && user.email) !== id ?
                  <Link to={`/profile/contacts/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Contact Details</h2>
                  </Link> :
                  <Link to={`/edit-profile/contacts/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Contact Details</h2>
                  </Link>}


                {(user && user.email) !== id ?
                  <Link to={`/profile/skills/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Specialist Fields</h2>
                  </Link> :
                  <Link to={`/edit-profile/skills/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Specialist Fields</h2>
                  </Link>}
                {(user && user.email) !== id ?
                  <Link to={`/profile/availability/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Availability</h2>
                  </Link> :
                  <Link to={`/edit-profile/availability/${id}`} className={styles['nav-link']}>
                    <h2 className={styles['nav-text']}>Availability</h2>
                  </Link>}

                <IconHouse
                  style={{
                    marginTop: "12px",
                    width: '24px',
                    alignSelf: 'start',
                    cursor: 'pointer',
                  }}
                  onClick={goBack}
                />
              </div>

              <div className={styles['profile-form']}>

                {(user && user.email) !== id ?
                  <Route exact path={`/profile/details/:id`}>
                    <PersonalDetails id={id} />
                  </Route> :
                  <Route path="/edit-profile/details/:id" exact>
                    <EditPersonalDetails id={id} />
                  </Route>}


                {(user && user.email) !== id ?
                  <Route exact path={`/profile/contacts/:id`}>
                    <ContactDetails id={id} />
                  </Route> :
                  <Route path="/edit-profile/contacts/:id" exact>
                    <EditContactDetails id={id} />
                  </Route>}

                {(user && user.email) !== id ?
                  <Route exact path={`/profile/skills/:id`}>
                    <SpecialistFields id={id} />
                  </Route> :
                  <Route path="/edit-profile/skills/:id" exact >
                    <EditSpecialistFields id={id} />
                  </Route>
                }

                {(user && user.email) !== id ?
                  <Route exact path={`/profile/availability/:id`}>
                    <Availability id={id} />
                  </Route> :
                  <Route path="/edit-profile/availability/:id" exact >
                    <EditAvailability id={id} />
                  </Route>
                }



              </div>
            </div>
          </div>
        </Switch>
      </Router>
      <Footer/>
      <IconFooter />
    </ProfileContextProvider>
  );
}
export default ProfilePage;