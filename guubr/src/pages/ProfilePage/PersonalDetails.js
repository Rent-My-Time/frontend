import { useContext } from 'react';
import * as styles from './ProfilePage.module.css';
import { Link, useParams } from 'react-router-dom';
import SecondaryButton from '../../components/reusableComponents/SecondaryButton';
import PrimaryButton from '../../components/reusableComponents/PrimaryButton';
import ProfileWrapper from '../../components/reusableComponents/ProfileWrapper';
import { ProfileContext } from '../../ProfileContext';
import { MyContext } from '../../Context';

function PersonalDetails(props) {
  const { user } = useContext(MyContext);
  const [formInfo, setFormInfo] = useContext(ProfileContext);
  console.log(formInfo, 'PROFILE CONTEXT');

  return (
    <div className={styles['personal-details']}>
      <div className={styles['input-container']}>
        <div className={styles['form-row']}>
          <div className={styles['two-column']}>
            <h3>Name</h3>
            <p>
              {formInfo && formInfo.fullName.firstName}{' '}
              {formInfo && formInfo.fullName.lastName}
            </p>
          </div>
          <div className={styles['two-column']}>
            <h3>Nationality</h3>
            <p>{formInfo && formInfo.nationality ? formInfo.nationality : `Not Specified`}</p>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['two-column']}>
            <h3>Age Group</h3>
            <p>{formInfo && formInfo.ageGroup ? formInfo.ageGroup : `Not Specified`}</p>
          </div>
          <div className={styles['two-column']}>
            <h3>Marital Status</h3>
            <p>{formInfo && formInfo.maritalStatus ? formInfo.maritalStatus : `Not Specified`}</p>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['two-column']}>
            <h3>Children</h3>
            <p>{formInfo && formInfo.children ? formInfo.children : `Not Specified`}</p>
          </div>
          <div className={styles['two-column']}>
            <h3>Gender</h3>
            <p>{formInfo && formInfo.gender ? formInfo.gender : `Not Specified`}</p>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['two-column']}>
            <h3>Languages</h3>
            <div className={styles['row']}>

              {formInfo && formInfo.languages.length !== 0 ?
                formInfo.languages.map((language, index) => (
                  <p key={index}>{language}</p>
                )) : <p>{`Not Specified`}</p>}
            </div>
          </div>

          <div className={styles['two-column']}>
            <h3>Location</h3>
            <p>
              { formInfo && formInfo.city && formInfo.country ? `${formInfo.city}, ${formInfo.country}` : "Not Specified"}
            </p>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['column']}>
            <h3>Education</h3>
            <p>{formInfo && formInfo.education ? formInfo.education : `Not Specified`}</p>
          </div>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles['row']}>
          {/* <Link to="/edit-portrait" style={{ width: '46%'}}><SecondaryButton>Portrait</SecondaryButton></Link> */}

          {/* <Link to="/edit-gallery" style={{ width: '46%' }}><SecondaryButton>Gallery</SecondaryButton></Link> */}
        </div>

        <ProfileWrapper
          name={formInfo && formInfo.fullName.firstName}
          experties={formInfo && formInfo.occupation}
          rate={formInfo && formInfo.hourlyRate}
          photo={formInfo && formInfo.pic}
        />
        {/* {(user && user.email) === props.id ? (
          <Link
            to={`/edit-profile/details/${props.id}`}
            style={{ width: '100%', marginBottom: '16px' }}
          >
            <SecondaryButton>Edit Profile</SecondaryButton>
          </Link>
        ) : null} */}

        <Link to={`/book/${props.id}`} style={{ width: '100%' }}>
          <PrimaryButton>Book</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default PersonalDetails;