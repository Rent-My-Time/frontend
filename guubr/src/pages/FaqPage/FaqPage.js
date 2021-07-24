import React from 'react';
import './FaqPage.css';
import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
import styled from 'styled-components';
import HeaderFaq from '../../components/HeaderFaq';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';
import textData from './data.faq.json';

function FaqPage() {
  console.log('FaqPage: ');
  console.log('textData: ', textData);
  return (
    <ContainerFaq>
      <HeaderFaq />
      <HeaderTextFaq>
        <Guubr className="Guubr__Logo" />
        <div>
        • Find A Specialist • 
        </div>
        <div>
        • Rent-My-Time • 
        </div>
        <div>
        • Meet for coffee, conversation, interviews, advice, lessons  • 
        </div>
        <div>
        Book a: teacher • lecturer • security • model • actor • dancer • author • gardener • artist • tutor • nanny • decorator • cook • pilot • golf partner • ski buddy • dog walker • pet sitter
        </div>
      </HeaderTextFaq>
      
      <TitleFaq> 
        <h1>FAQ</h1>
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
          text="Negotiate the time. / Confirm it."
        />
        <Faq
          title="MEET"
          text="Meet up. [phase II:  checkin/checkout]"
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

      <GuubrTagLine>
        <div>
          GuuBr Group comes from the Clever Programmer Full Stack Mastery Bootcamp 
        </div> 
        <div>
          Gianna • Joshua • Melissa • Nathaniel • Nina • Robin
        </div>
      </GuubrTagLine>

      <Footer />
    </ContainerFaq>
  );
}

const ContainerFaq = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;
const HeaderTextFaq = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:13px;
  margin: 20px 20px 60px 20px;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;
const TitleFaq = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;
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
const GuubrTagLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 100;
  margin: 10px 10px 0px 10px;
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
  font-size: 14px;
  font-weight: 100;
`;

export default FaqPage;