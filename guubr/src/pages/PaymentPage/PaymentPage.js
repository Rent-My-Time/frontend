import React, {useEffect, useContext} from 'react';
import './PaymentPage.css';
import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
import styled from 'styled-components';
import Footer from '../../components/Footer';
import IconFooter from '../../components/IconFooter';
import {ProfileContext}  from "../../ProfileContext";
import {BookingContext}  from "../../BookingContext";

function PaymentPage() {
  const [formInfo, setFormInfo] = useContext(ProfileContext); // from ProfilePage - selected Profile
  const [bookFormInfo, setBookFormInfo] = useContext(BookingContext);

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <ShowPaymentOptions className="container">
          <Guubr className="Guubr__Logo" />
          <SomeSpace>
          </SomeSpace>
          <RED>
            <h3>total to be charged:  {bookFormInfo.appt_length} Hours x ${formInfo.hourlyRate}</h3>
          </RED>
          <GREEN>
            <h3> + booking fee: 10%</h3>
          </GREEN>
          <SomeSpace>
          </SomeSpace>
          <div>
            <h2>Please Select Method of Payment</h2>
          </div>
         
          <div>
            <PayButton>• Paypal • </PayButton>
          </div>
          <div>
            <PayButton>• Stripe • </PayButton>
          </div>
          <SomeBigSpace>
          </SomeBigSpace>
      </ShowPaymentOptions>
    </div>
    );
}

const PayButton = styled.button`
  background: var(--guubr-letter2);
  border: 2px solid lightgrey;
  height: 38px;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  padding: 0 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }
`;

const ShowPaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 20px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const SomeSpace = styled.div`
  margin-top: 10px;
  margin-bottome: 10px;
`;

const SomeBigSpace = styled.div`
  margin-top: 40px;
  margin-bottome: 40px;
`;

const RED = styled.div`
  color: var(--guubr-letter1);
`;

const GREEN = styled.div`
  color: var(--guubr-letter2);
`;


export default PaymentPage;

