import React from 'react';
import styled from 'styled-components';
import HeaderFaq from '../../components/HeaderFaq';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';
/* import { createGlobalStyle } from 'styled-components'; */
import textData from './data.faq.json';

function FaqPage() {
  console.log('FaqPage: ');
  console.log('textData: ', textData);
  return (
    <ContainerFaq>
      <HeaderFaq />

      <TitleGuubr>
        <img src="/logo.png" alt="logo" />
        Market Place Where You Buy Peoples' Time
      </TitleGuubr>
      
      <TitleFaq> 
        <h1>FAQ</h1>
        <div>
          Find A Specialist     Rent-My-Time     Meet for coffee conversation interviews advice lessons.....
        </div>
        <div>
          Book a teacher lecturer security detail model actor dancer author gardener astronaut.....
        </div>
      </TitleFaq>

      <Faqs>
        <Faq
          title="JOIN"
          text="Membership is Free! Simply fill out a profile & list your specialist fields."
        />
        <Faq
          title="FIND"
          text="Find a specialist:  Search by specialist field. [phase II: chat]"
        />
        <Faq
          title="REQUEST BOOKING"
          text="Select a time & date / Detail what you would like."
        />
        <Faq
          title="BOOKED"
          text="Negotiate the time / Confirm it."
        />
        <Faq
          title="MEET"
          text="NMeet up. [phase II:  checkin/checkout]"
        />          
        <Faq
          title="REVIEW"
          text="Client / Specialist post meeting review. (required)"
        />
          <Faq
          title="SUPPORT"
          text="Contact support@guubr.com for issues & questions."
        />
          <Faq
          title="ABOUT"
          text="GuuBr is the brought to you by Oleg Astakhov & the GuuBr Group."
        />        
      </Faqs>
      <TitleFaq>
        <div>
          GuuBr Group comes from  the Clever Programmer Full Stack Mastery Bootcamp Cohort 1. 
        </div> 
        <div>
          Gianna, Joshua, Melissa, Nathaniel, Nina, Robin
        </div>
      </TitleFaq>
      <Footer />
    </ContainerFaq>
  );
}

const ContainerFaq = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;
const TitleGuubr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:13px;
  margin-top: 20px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-weight: 100;

  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
  img {
    width: 90px;
    height: 40px;
  }
`;
const TitleFaq = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
  gap: 20px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const Faqs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 20px auto 0 auto;
`;

export default FaqPage;