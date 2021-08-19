import React from 'react'
import styled from "styled-components";
import LoginForm from "./loginForm";
import SignUpForm  from "./signUpForm";
//import UserRegistration from "./userRegistration"
 import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
 import {motion } from "framer-motion";
import { useState } from 'react';
//import { AccountContext } from './accountContext';
import IconFooter from '../../components/IconFooter';
import Footer from '../../components/Footer';
import { AccountContext } from './accountContext';

//This file too

// src/components/userAccountBox/index.js
// src/components/userAccountBox/index.js
// /userAccountBox/index.js
// /userAccountBox/LoginForm.js

export default function AccountBox(props) {
     const [isExpanded, setExpanded] = useState(false);
     const [active, setActive] = useState("signIn");

     const playExpandingAnimation = () => {

               setExpanded(true);
               setTimeout(() => {
               setExpanded(false);
          }, ExpandingTransition.duration * 1000 - 1500);
     }

     //Switch Animation from signIn to SignUp
     const switchToSignUp = () => {
               playExpandingAnimation();
               setTimeout(() => {
                    setActive("signUp");
               }, 400)
     }

     //Switch Animation from signIn to SignUp
     const switchToSignIn = () => {
               playExpandingAnimation();
               setTimeout(() => {
                    setActive("signIn");
               }, 400)
     }

     const contextValue = { switchToSignIn, switchToSignUp};


     return (
          <AccountContext.Provider value={contextValue}>
               <ContainerDiv>
                    <div className="BookingPage__Header" >
                         <Guubr className="BookingPage__Logo" />

                    </div>
                    <BoxContainer>
                         <TopContainer>
                              <BackDrop initial={false}
                                   animate={isExpanded ? "expanded" : "collapsed"}
                                   variants={BackDropVariants}
                                   transition={ExpandingTransition}
                                   className="backDrop"
                              />
                              {active === "signIn" && (
                                   <HeaderContainer>
                                   <HeaderText    HeaderContainer="var(--guubr-letter2)">Welcome</HeaderText>
                                   <HeaderText>Back</HeaderText>
                                   <SmallText>Please sign-in to continue!</SmallText>
                                   </HeaderContainer>
                              )}
                              {active === "signUp" && (
                                   <HeaderContainer>
                                   <HeaderText>Create</HeaderText>
                                   <HeaderText>Account</HeaderText>
                                   <SmallText>Please sign-up to continue!</SmallText>
                                   </HeaderContainer>
                              )}
                               {active === "googleSignIn" && (
                                   <HeaderContainer>
                                   <HeaderText>Google </HeaderText>
                                   <HeaderText>Sign-in</HeaderText>
                                   <SmallText>Please sign-in to continue!</SmallText>
                                   </HeaderContainer>
                              )}
                         </TopContainer>
                         <InnerContainer>
                              {active==="signIn" && <LoginForm/>}
                              {active==="signUp" && <SignUpForm/>}
                              {/* <p onClick={playExpandingAnimation} >clickMe</p> */}
                         </InnerContainer>
                    </BoxContainer>
                    <Footer/>
                    <IconFooter/>
               </ContainerDiv>
          </AccountContext.Provider>
     )
}
//http://localhost:3000/static/js/C:/Users/giann/Desktop/GUUBR-TEST/frontend/guubr/src/components/userAccountBox/loginForm.js


const ContainerDiv= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`
// *******Container for the LogIn and SignUp Form ***********
const BoxContainer = styled.div`
  width: 400px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  border: 1px solid rgb(2,0,36);
  box-shadow: 5px -5px 10px rgba(217, 217, 217, 0.2),
    -5px -5px 10px rgba(255, 255, 255, 0.9),
    5px 5px 13px rgba(217, 217, 217, 0.9), 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 4% 2%;

`
// *********TopContainer that contain  BackDrop  Contain the title
const TopContainer = styled.div`
     width: 100%;
     height: 250px;
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
     padding: 0 1.8em;
     padding-bottom: 5em;



`;



// ********** boX to create animation *****
const BackDrop= styled(motion.div)`
     width: 200%;
     height: 580px;
     position: absolute;
     display: flex;
     flex-direction: column;
     border-radius: 50%;
     transform: rotate(333deg);
     top: -290px;
     left: -170px;
      border: 1px solid rgb(2,0,36);
     background:  rgba(228,232,236,1)
     /* color: rgba(228,232,236,1) ; */;
`;

const HeaderContainer = styled.div`
     width: 100%;;
     display: flex;
     flex-direction: column;
`;

const HeaderText = styled.h2`
     font-size: 30px;
     -webkit-text-stroke-width: 1px;
     -webkit-text-stroke: 0.1px rgb(2,0,36);
     font-weight: 600;
     line-height: 1.24;

     z-index: 10;
     margin: 0;
     font-size: 24px;
     letter-spacing: 1px;
     font-weight: 150;
     text-transform: uppercase;

`;

 const SmallText = styled.h5`
     font-weight: 500;
     font-size: 14px;
      letter-spacing: 1px;
     font-weight: 150;
     z-index: 10;
     color:  --guubr-letter1;

 `;

const InnerContainer =styled.div`
     width: 100%;;
     display: flex;
     flex-direction: column;

`;

// ********** Animation BackDrop ***********
 const BackDropVariants = {
      expanded: {
           width: "233%",
           height: "1050px",
           borderRadius: "20%",
           transform: "rotate(333deg)"


      },
      collapsed: {
           width: "160%",
           height: "550px",
           borderRadius: "50%",
           transform: "rotate(333deg)"
      }
 };

 const ExpandingTransition = {
      type: "spring",
      duration: 2.3,
      stiffness: 30,
 };
