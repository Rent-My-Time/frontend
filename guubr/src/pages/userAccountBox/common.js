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
     margin: 2px;
     display: flex;
     flex-direction: column;
     box-shadow: 0px, 0px, 2.5px rgba(15, 15, 15 , 0.19);
     padding-left: 10px;
     border: 0.3px solid 1D37C2


`;

// **** Used as Hyperlink when you forgot your password

export const MutedLink = styled.a`
     font-size: 12px;
     color: rgba(54,58,83,1);
     font-weight: 500;
     text-decoration: none;
`;

export const BoldLink = styled.a`
     font-size: 12px;
     color:rgb(28,55,194);
     font-weight: 500;
     text-decoration: none;
     margin: 0 4px;

`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  outline: none;
   border: 1px solid rgba(200, 200, 200, 0.3);
  background: #ffffff;
  border: 1px solid lightgrey;
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(203, 200, 200, 4  );
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(139,174,241,0.9979342078628326);

  }
  .error-message &:focus{
    outline: none;
    border-bottom: 2px solid red;
  }

`;



export const SubmitButton = styled.button`
  width: 90%;
  margin: 5px;
  padding: 11px 20px;
  display: inline-block;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  /* border: none;
  border-radius: 3px 3px 3px 3px; */
  border-radius: 5px;
  border: 1px 1px solid #333;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-color:rgba(228,232,236,1);
  border: 1px solid #333;


  &:hover {
     background: lightgrey;


;

    &:img {
      float: center;
    }
  }
  `;
  export const GoogleButton = styled.button`
  width: 90%;
  margin: 5px;
  padding: 11px 20px;
  font-weight: 600;
  text-align: center;
  border: none;
  /* border-radius: 3px 3px 3px 3px; */
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(0,110,230);
  background-image: url("/assets/google.png");

    font-size: 16px;
    color: white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #333;
    cursor: pointer;
    background-size: contain;
    color: black;



    &:hover {
      background: rgba(228,232,236,1);

;;
    &:img {
      float: center;
    }
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
export const UnorderedList = styled.ul`
    margin: 0 2%;
    color: red;
    font-size: 0.75em;
    position: relative;

     ul li{
  	display: inline-table;
    }

`
