import React from 'react'
import styled from "styled-components";
import LoginForm from "./loginForm";


// src/components/userAccountBox/index.js
// src/components/userAccountBox/index.js
// /userAccountBox/index.js
// /userAccountBox/LoginForm.js

export default function AccountBox(props) {

     return (
          <div>
               <BoxContainer>
                    <TopContainer>
                         <BackDrop/>
                         <HeaderContainer>
                              <HeaderText>Welcome</HeaderText>
                              <HeaderText>Back</HeaderText>
                              <SmallText>Please sign-in  to continue </SmallText>
                         </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                          <LoginForm/>
                    </InnerContainer>
               </BoxContainer>
          </div>
     )
}
//http://localhost:3000/static/js/C:/Users/giann/Desktop/GUUBR-TEST/frontend/guubr/src/components/userAccountBox/loginForm.js

// *******Container for the LogIn and SignUp Form ***********
const BoxContainer = styled.div`
     top: 80px;
     width: 520px;
     min-height: 562px;
     display: flex;
     flex-direction: column;
     border-radius: 10px;
     background-color: #fff;
     box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
     position: relative;
     overflow: hidden;
     background: #FFFFFF;
     box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2), 5px -5px 10px rgba(217, 217, 217, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(217, 217, 217, 0.9);

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
const BackDrop= styled.div`
     top: 80px;
     left: -180px;
     margin: 0;
     margin-top: 8px;
     width: 200%;
     min-height: 562px;
     position: relative;
     display: flex;
     flex-direction: column;
     border-radius: 50%;
     /* background: rgb(2,0,36);
     background: linear-gradient(90deg, rgba(2,0,36,1) 0%,
                rgba(216,223,236,1) 9%, rgba(248,248,251,1) 100%); */
     /* background: rgb(2,0,36);
     background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,193,193,1) 0%, rgba(193,193,193,1) 29%, rgba(248,248,251,1) 100%); */
     transform: rotate(-30deg);
     background: rgb(2,0,36);
     background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(122,122,125,1) 0%, rgba(193,193,193,1) 29%, rgba(248,248,251,1) 100%);



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
