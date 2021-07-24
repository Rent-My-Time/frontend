import React from 'react'
import styled from "styled-components";
import LoginForm from "./loginForm";
import SignUpForm  from "./signUpForm";
import {
     BookingPage__Logo,
     BookingPage__Header }
 from "./common";
 import { ReactComponent as Guubr } from "../../assets/GuuBr.svg";
 import {motion } from "framer-motion";
import { useState } from 'react';
import { AccountContext } from './accountContext';


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
                    <div className="BookingPage__Header">
                         <Guubr className="BookingPage__Logo" />

                    </div>
                    <BoxContainer>
                         <TopContainer>
                              <BackDrop initial={false}
                                   animate={isExpanded ? "expanded" : "collapsed"}
                                   variants={BackDropVariants}
                                   transition={ExpandingTransition}
                              />
                              {active === "signIn" && (
                                   <HeaderContainer>
                                   <HeaderText>Welcome</HeaderText>
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

`
// *******Container for the LogIn and SignUp Form ***********
const BoxContainer = styled.div`
  width: 400px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

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
     height: 550px;
     position: absolute;
     display: flex;
     flex-direction: column;
     border-radius: 50%;
     transform: rotate(333deg);
     top: -290px;
     left: -170px;
     background: rgb(138,146,180);
     background: linear-gradient(90deg, rgba(138,146,180,1) 100%, rgba(5,5,5,1) 100%);
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
     color: #fff;
     z-index: 10;
     margin: 0;
`;

 const SmallText = styled.h5`
     color: #fff;
     font-weight: 500;
     font-size: 11px;
     z-index: 10;
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
