import React from "react";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
import "./BookingPage.css";

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
              <input
                type="text"
                name="firstName"
                className="BookingPage__Input"
                placeholder="First Name"
              />
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="BookingPage__Input"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="BookingPage__Input"
                placeholder="Enter your email"
              />
            </div>
            <div className="BookingPage__Column">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="BookingPage__Input"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__Three">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                className="BookingPage__Input"
                name="date"
                placeholder="Pick A Date"
              />
            </div>
            <div className="BookingPage__Column__Three">
              <label htmlFor="time">Select A Time</label>
              <input
                type="text"
                className="BookingPage__Input"
                name="time"
                placeholder="Select A Time"
              />
            </div>
            <div className="BookingPage__Column__Three">
              <label htmlFor="hours">Appointment Length</label>
              <input
                type="text"
                className="BookingPage__Input"
                name="hours"
                placeholder="How long?"
              />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="jobRequest">Job Request</label>
              <input
                type="text"
                name="jobRequest"
                className="BookingPage__Input"
                placeholder="Click the dropdown to see job requests"
              />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="availabilityType">Availability Type</label>
              <input
                type="text"
                name="availabilityType"
                className="BookingPage__Input"
                placeholder="Click the dropdown to see availability types"
              />
            </div>
          </div>
          <div className="BookingPage__Form">
            <div className="BookingPage__Column__One">
              <label htmlFor="comments">Comments</label>
              <textarea
                type="text"
                name="comments"
                className="BookingPage__Input Comment__Section"
                placeholder="Add your comments here"
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
