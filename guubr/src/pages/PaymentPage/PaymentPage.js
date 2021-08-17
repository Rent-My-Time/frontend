import React, {useEffect} from 'react';
import './PaymentPage.css';
import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
import styled from 'styled-components';
import HeaderFaq from '../../components/HeaderFaq';
import Footer from '../../components/Footer';
import IconFooter from '../../components/IconFooter';
import Faq from '../../components/Faq';

function PaymentPage() {
  console.log('PaymentPage: ');

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <ShowPaymentOptions class="container">
        <Guubr className="Guubr__Logo" />
        <div>
        • Paypal • 
        </div>
        <div>
        • Stripe • 
        </div>
    </ShowPaymentOptions>
    );
}

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

export default PaymentPage;

