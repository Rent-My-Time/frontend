import styled from "styled-components"

//This form contains the common components to the login form and to the signUp form

export const BoxContainer= styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items:center;
     margin-top: 10px;
`;

export const FormContainer=styled.form`
     width: 100%;
     margin: 10px;
     display: flex;
     flex-direction: column;
     box-shadow: 0px, 0px, 2.5px rgba(15, 15, 15 , 0.19);
     padding-left: 10px;
`;

// **** Used as Hyperlink when you forgot your password

export const MutedLink = styled.a`
     font-size: 12px;
     color: rgba(200, 200, 200, 0.8);
     font-weight: 500;
     text-decoration: none;
`;

export const BoldLink = styled.a`
     font-size: 12px;
     color: #7263e3;
     font-weight: 500;
     text-decoration: none;
     margin: 0 4px;

`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1
      );
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(136, 142, 176, 0.4);
  }
`;

export const SubmitButton = styled.button`
  width: 90%;
  margin: 5px;
  padding: 11px 20px;
  display: inline-block;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 3px 3px 3px 3px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(138, 146, 180, 1);


    &:hover {
      filter: brightness(1.03);
    }
  `;

const BookingPage__Logo =styled.div`
  width: 100px;
  height: 100px;
  margin: 0 2%;
`
const BookingPage__Header =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3%;
`
