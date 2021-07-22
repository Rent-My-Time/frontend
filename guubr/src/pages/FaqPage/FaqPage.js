import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
/* import { createGlobalStyle } from 'styled-components'; */
import textData from './data.faq.json';

function FaqPage() {
  console.log('FaqPage: ');
  console.log('textData: ', textData);
  return (
    <ContainerFaq>
      <Header />
      <TitleFaq> FAQ </TitleFaq>
      <TitleSmall>
        Find A Specialist     Rent-My-Time     Meet for coffee...conversation...interviews...advice...lessons.....
        <br></br>
        Book a teacher...lecturer...security detail...model...actor...dancer...author...gardener...astronaut.....
      </TitleSmall>
        <div classnName="faqBox">
          <NeumorphBox>
          </NeumorphBox>
        </div>
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
      <Footer />
    </ContainerFaq>
  );
}

export default FaqPage;

const NeumorphBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
`;

const ContainerFaq = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;

const TitleSmall = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const TitleFaq = styled.div`
  font-size: 25px;
  text-align: center;
`;
