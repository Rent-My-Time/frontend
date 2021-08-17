/* 
* form input code for time, date, number from
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time  
*
* Melissa
* 8/16/2021
*/

import React from "react";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
import styled from 'styled-components';
import "./BookingPage.css";
import Footer from "../components/Footer";
import PrimaryButton from "../components/reusableComponents/PrimaryButton.js";
import PrimaryInput from "../components/reusableComponents/PrimaryInput.js";
import PrimaryTextArea from "../components/reusableComponents/PrimaryTextArea.js";

function BookingPage() {
  return (
    <div className="BookingPage__Container">

      <div className="BookingPage__Header">
        <Guubr className="BookingPage__Logo" />
      </div>
      <TitleBookingPage>
        <h1>Booking Request</h1>
      </TitleBookingPage>

      <div className="BookingPage__Main">
        <form>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column">
              <label htmlFor="firstName">First Name</label>
              <PrimaryInput type="text" name="firstName" id="firstName"/>
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="lastName">Last Name</label>
              <PrimaryInput type="text" name="lastName" id="lastName"/>
            </div>
          </div>

          <div className="BookingPage__Form">
            <div className="BookingPage__Column">
              <label htmlFor="email">Email</label>
              <PrimaryInput type="email" name="email" id="email"/>
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="phone">Phone</label>
              <PrimaryInput type="text" name="phone" id="phone"/>
            </div>
          </div>

 
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__Three">
              <label htmlFor="appt_date">Date</label>
              <input type="date" id="appt_date" name="appt_date"
                min="2021-01-01" max="2030-12-31"></input>
            </div>

            <div className="BookingPage__Column__Three">
              <label htmlFor="appt_time">Select a Time</label>
              <input type="time" id="appt_time" name="appt_time" 
                min="00:00" max="24:00" required></input>
            </div>

            <div className="BookingPage__Column__Three">
              <label htmlFor="appt_length">Total Hours?</label>
              <input type="number" id="appt_length" name="appt_length"
                min="1" max="48"
                step=".5" placeholder="1"></input>
            </div>
          </div>


          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="jobRequest">Job Description</label>
              <PrimaryInput type="text" name="jobRequest" id="jobRequest"
              placeholder="Details" />
            </div>
          </div>

          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="expertiseLevel">Expertise Level</label>
              <PrimaryInput type="text" name="expertiseLevel" id="expertiseLevel" 
              placeholder="Expert/Intermediate/Entry Level/Networking/Making A New Friend"/>
            </div>
          </div>

          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="availabilityType">Availability</label>
              <PrimaryInput type="text" name="availabilityType" id="availabilityType"
              placeholder="Phone/Zoom/In-Person(Your)/In-Person(My)/In-Person(3rd Loc)"/>
            </div>
          </div>

          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="address">Specify Location</label>
              <PrimaryInput type="text" name="address" id="address"
              placeholder="Address"/>
            </div>
          </div>

          <div className="BookingPage__Form">
            <div className="BookingPage__Comment_Box">
              <label htmlFor="comments">Comments</label>
              <PrimaryTextArea
                type="text" name="comments" id="comments"
                placeholder="Add additional comments here"
              />
            </div>
          </div>

          <PrimaryButton>Submit</PrimaryButton>
            <input type></input>
          
        </form>      
      </div> 
      <Footer />
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

export default BookingPage;
