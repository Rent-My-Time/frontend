import React from "react";
/* import { createGlobalStyle } from 'styled-components'; */
import textData from "./data.faq.json"

function FaqPage() {
  console.log("FaqPage: ");
  console.log("  ");
  console.log("textdata: ", textData[0]);
  return (
    <div className="faq">
      <h1>FAQ Page</h1>
      <div className="faqBox">
        <button> myButton </button>
        <NeumorphBox> neumorphic box to put faqs </NeumorphBox>
        <div className="faqdata">
          <h1>JOIN</h1>
          <h2>{textData[0]}</h2>
          <h1>FIND</h1>
          <h1>REQUEST BOOKING</h1>
          <h1>BOOKED</h1>
          <h1>MEET</h1>
          <h1>REVIEW</h1>
          <h1>SUPPORT</h1>
          <h1>ABOUT</h1>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;

const NeumorphBox = () => {
  return (
    <div className="neumorphBox">
      <h2> NEUMORPHIC BOX </h2>
    </div>
  )
}