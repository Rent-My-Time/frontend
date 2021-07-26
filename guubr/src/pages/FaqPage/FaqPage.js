import React, {useEffect} from 'react';
import './FaqPage.css';
import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
import styled from 'styled-components';
import HeaderFaq from '../../components/HeaderFaq';
import Footer from '../../components/Footer';
import IconFooter from '../../components/IconFooter';
import Faq from '../../components/Faq';
import textData from './data.faq.json';

function FaqPage() {
  console.log('FaqPage: ');
  console.log('textData: ', textData);

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <ContainerFaq>
      <HeaderFaq />
      <HeaderTextFaq>
        <Guubr className="Guubr__Logo" />
        <div>
        • Rent-My-Time • 
        </div>
        <div>
        • Find A Specialist • 
        </div>
      </HeaderTextFaq>
      
      <TitleFaq> 
        <h1>FAQ</h1>
      </TitleFaq>

      <Faqs>
        <Faq
          title="WHAT IS GUUBR"
          titleColor="var(--guubr-letter1)"
          text="A place to make CONNECTIONS. Offer your SIDE-GIG. Get PAID. Get TOGETHER."
        />
        <Faq
          title="WHY TO MEET"
          titleColor="var(--guubr-letter2)"
          text="• Meet for a: coffee, conversation, interview, lesson • 
          Book a: teacher • lecturer • security team • model • tour guide • actor • dancer • author • gardener • artist • tutor • nanny • decorator • cook • pilot • golf partner • ski buddy • dog walker • pet sitter • etc."
        />
        <Faq
          title="JOIN"
          titleColor="var(--guubr-letter3)"
          text="Membership is Free! Simply fill out a profile and list your skills & expertise & price."
        />
        <Faq
          title="FIND"
          titleColor="var(--guubr-letter4)"
          text="Find a specialist:  Search by specialist field. [phase II: chat with them]"
        />
        <Faq
          title="REQUEST BOOKING"
          titleColor="var(--guubr-letter5)"
          text="Select a time & date / Detail what you would like."
        />
        <Faq
          title="BOOKED"
          titleColor="var(--guubr-letter1)"
          text="Negotiate the time & date / Confirm it."
        />
        <Faq
          title="MEET"
          titleColor="var(--guubr-letter2)"
          text="Meet up. [phase II:  checkin/checkout to the meeting]"
        />          
        <Faq
          title="REVIEW"
          titleColor="var(--guubr-letter3)"
          text="Client / Specialist post meeting reviews. (Required before booking future meetings.)"
        />
        <Faq
          title="SUPPORT"
          titleColor="var(--guubr-letter4)"
          text="Contact support@guubr.com for questions & issues."
        />
        <Faq
          title="ABOUT"
          titleColor="var(--guubr-letter5)"
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
      <IconFooter />
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