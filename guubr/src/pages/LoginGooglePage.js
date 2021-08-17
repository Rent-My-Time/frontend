import React from 'react';
import firebase from "../firebase";
import "firebase/auth";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
import styled from 'styled-components';
import { GoogleButton } from './userAccountBox/common';

const LoginGooglePage = ({ history }) => {

    const handleLogin = async() => {
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);

          /* Here add to the database?? */
         
        history.push("/");
    };

    return (
        <div>
            <GoogleButton onClick={() => handleLogin()}> GuuBr Google LOGIN </GoogleButton>
        </div>
    )
}

// const GoogleButton = styled.button`
//   background: #006ee6;
//   box-shadow: 0px 2px 1px #0041cb;
//   height: 38px;
//   width: 100%;
//   color: #f2f2f2;
//   font-size: 16px;
//   font-weight: 300;
//   padding: 0 20px;
//   &:hover,
//   &:focus {
//     cursor: pointer;
//     text-decoration: none;
//   }
// `;

export default LoginGooglePage;
