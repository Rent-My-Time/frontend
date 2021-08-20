/* 
* 8/15/2021 Melissa - added set date,tiime,hours
* 8/20/2021 Robin - styled, added code to save form data, payment page
* 
* note from Melissa: form input code for time, date, number from
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time  
* 
*/

import React, { useContext, useEffect } from "react";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components';
import "./BookingPage.css";
import Footer from "../components/Footer";
import PrimaryButton from "../components/reusableComponents/PrimaryButton.js";
import SecondaryButton from "../components/reusableComponents/SecondaryButton.js";
import PrimaryInput from "../components/reusableComponents/PrimaryInput.js";
import PrimaryTextArea from "../components/reusableComponents/PrimaryTextArea.js";
import {ProfileContext}  from "../ProfileContext";
import {BookingContext}  from "../BookingContext";


function BookingPage(props) {
  const [formInfo, setFormInfo] = useContext(ProfileContext); // from ProfilePage - selected Profile
  const [bookFormInfo, setBookFormInfo] = useContext(BookingContext);

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const handleInputChange = event => {
    const target = event.target
    const name = target.name;
    const value = target.value;
    let hourly_rate = 0;

    switch (name) {
        case 'lastName':
        case 'firstName':
        case 'email':
        case 'phone':
        case 'appt_date':
        case 'appt_time':
        case 'appt_length':
        case 'jobRequest':
        case 'expertiseLevel':
        case 'availabilityType':
        case 'adress':
        case 'comments':
            setBookFormInfo({ ...bookFormInfo, [name]: value});
            hourly_rate = formInfo.hourlyRate;
            console.log("bookingPage: handleInputChange: switch on name: ", {name});
            console.log("handleInputChange: bookFormInfo:  ", bookFormInfo);
            break;
        default:
            console.log("bookingPage: handleInputChange: switch DEFAULT");
            setBookFormInfo({ ...bookFormInfo, [name]: value});
    }
  }

  const saveBookForm = (e) => {
    e.preventDefault();
    setBookFormInfo(bookFormInfo);
    history.push(`/payment`);
    console.log("formInfo: ", formInfo);
    console.log("bookFormInfo: ", bookFormInfo);
  } 


  return (

      <div className="BookingPage__Container">

        <div className="BookingPage__Header">
          <Guubr className="BookingPage__Logo" />
        </div>
        <TitleBookingPage>
          <h1>Booking Request</h1>
        </TitleBookingPage>

        <BookingProfileDisplay>
          <h2>Booking: {props.id}</h2>
        </BookingProfileDisplay>

        <div className="BookingPage__Main">
          <form>
            <div className="BookingPage__Form">
              <div className="BookingPage__Column">
                <label htmlFor="firstName">First Name</label>
                <PrimaryInput type="text" name="firstName" id="firstName"  
                value={bookFormInfo && bookFormInfo.firstName} onChange={handleInputChange}/>
              </div>
              <div className="BookingPage__Column">
                <label htmlFor="lastName">Last Name</label>
                <PrimaryInput type="text" name="lastName" id="lastName" 
                value={bookFormInfo && bookFormInfo.lastName} onChange={handleInputChange}/> 
              </div>
            </div>

            <div className="BookingPage__Form">
              <div className="BookingPage__Column">
                <label htmlFor="email">Email</label>
                <PrimaryInput type="email" name="email" id="email" 
                value={bookFormInfo && bookFormInfo.emaiil} onChange={handleInputChange}/> 
              </div>
              <div className="BookingPage__Column">
                <label htmlFor="phone">Phone</label>
                <PrimaryInput type="text" name="phone" id="phone"
                value={bookFormInfo && bookFormInfo.lastName} onChange={handleInputChange}/>             </div>
            </div>


            <div className="BookingPage__Form">
              <div className="BookingPage__Column__Three">
                <label htmlFor="appt_date">Date</label>
                <input type="date" id="appt_date" name="appt_date"
                  min="2021-01-01" max="2030-12-31"
                  value={bookFormInfo && bookFormInfo.appt_date} onChange={handleInputChange}> 
                </input>
              </div>

              <div className="BookingPage__Column__Three">
                <label htmlFor="appt_time">Select a Time</label>
                <input type="time" id="appt_time" name="appt_time"
                  min="00:00" max="24:00" required 
                  value={bookFormInfo && bookFormInfo.appt_time} onChange={handleInputChange}> 
                </input>
              </div>

              <div className="BookingPage__Column__Three">
                <label htmlFor="appt_length">Total Hours?</label>
                <input type="number" id="appt_length" name="appt_length"
                  min="1" max="48"
                  step=".5" placeholder="1" 
                  value={bookFormInfo && bookFormInfo.appt_length} onChange={handleInputChange}> 
                </input>
              </div>
            </div>


            <div className="BookingPage__Form">
              <div className="BookingPage__Column__One">
                <label htmlFor="jobRequest">Job Description</label>
                <PrimaryInput type="text" name="jobRequest" id="jobRequest" placeholder="Details" 
                  value={bookFormInfo && bookFormInfo.jobRequest} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="BookingPage__Form">
              <div className="BookingPage__Column__One">
                <label htmlFor="expertiseLevel">Expertise Level</label>
                <PrimaryInput type="text" name="expertiseLevel" id="expertiseLevel"
                  placeholder="Expert/Intermediate/Entry Level/Networking/Making A New Friend" 
                  value={bookFormInfo && bookFormInfo.expertiseLevel} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="BookingPage__Form">
              <div className="BookingPage__Column__One">
                <label htmlFor="availabilityType">Availability</label>
                <PrimaryInput type="text" name="availabilityType" id="availabilityType"
                  placeholder="Phone/Zoom/In-Person(Your)/In-Person(My)/In-Person(3rd Loc)" 
                  value={bookFormInfo && bookFormInfo.availabilityType} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="BookingPage__Form">
              <div className="BookingPage__Column__One">
                <label htmlFor="address">Specify Location</label>
                <PrimaryInput type="text" name="address" id="address" placeholder="Address" 
                  value={bookFormInfo && bookFormInfo.address} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="BookingPage__Form">
              <div className="BookingPage__Comment_Box">
                <label htmlFor="comments">Comments</label>
                <PrimaryTextArea
                  type="text" name="comments" id="comments" placeholder="Add additional comments here"
                  value={bookFormInfo && bookFormInfo.comments} onChange={handleInputChange} />
              </div>
            </div>

            <BookingTotalDisplay>
              <p>BOOKING {formInfo && formInfo.fullName.firstName} {formInfo && formInfo.fullName.lastName}</p>
              <p>Hourly Rate: ${formInfo && formInfo.hourlyRate}</p>
              <p>Hours: {bookFormInfo && bookFormInfo.appt_length}</p>
            </BookingTotalDisplay>

            < PrimaryButton style={{ width: '100%' }} onClick={(ev) => saveBookForm(ev)}>Purchase</ PrimaryButton>
            <SecondaryButton style={{ marginTop: '16px'  }} onClick={goBack}>Cancel</SecondaryButton>
          </form>
        </div>
      </div>
  );
}

const TitleBookingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2px;
  margin-bottom: 40px;
  gap: 5px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const BookingProfileDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  gap: 5px;
  font-weight: 100;
  color: var(--guubr-letter1);
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const BookingTotalDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  gap: 10px
  font-weight: 100;
  color: var(--guubr-letter3);
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

export default BookingPage;
