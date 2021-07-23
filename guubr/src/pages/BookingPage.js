import React from "react";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
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
        <h1>Booking Page</h1>
      </div>
      <div className="BookingPage__Main">
        <form>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column">
              <label htmlFor="firstName">First Name</label>
              <PrimaryInput type="text" name="firstName" />
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="lastName">Last Name</label>
              <PrimaryInput type="text" name="lastName" />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column">
              <label htmlFor="email">Email</label>
              <PrimaryInput type="text" name="email" />
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="phone">Phone</label>
              <PrimaryInput type="text" name="phone" />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__Three">
              <label htmlFor="date">Date</label>
              <PrimaryInput type="text" name="date" />
            </div>
            <div className="BookingPage__Column__Three">
              <label htmlFor="time">Select A Time</label>
              <PrimaryInput type="text" name="time" />
            </div>
            <div className="BookingPage__Column__Three">
              <label htmlFor="hours">Appointment Length</label>
              <PrimaryInput type="text" name="hours" />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="jobRequest">Job Request</label>
              <PrimaryInput type="text" name="jobRequest" />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="availabilityType">Availability Type</label>
              <PrimaryInput type="text" name="availabilityType" />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="comments">Comments</label>
              <PrimaryTextArea
                type="text"
                name="comments"
                placeholder="Add your comments here"
              />
            </div>
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default BookingPage;
