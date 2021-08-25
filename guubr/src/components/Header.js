import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import PrimaryButton from "./reusableComponents/PrimaryButton.js";
import { MyContext } from "../Context.js";
import firebase from "firebase";
import { ReactComponent as IconUser } from "../assets/user_circle_male_avatar_account_icon.svg";
function Header() {
  const { user } = useContext(MyContext)
  let history = useHistory()
  console.log(user)
  const logOut = (e) => {
    e.preventDefault()
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      history.push('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  
  if (user) {
    return (
      <Container>
        <img src="/logo.png" alt="logo" />
        <div>
          <h3>{`Welcome ${user.displayName}`}</h3>

          <Link to={`/edit-profile/details/${user.email}`} style={{ textDecoration: 'none' }}>
            <IconUser className="iconLogo" />
          </Link>
          <h2 onClick={(ev) => logOut(ev)}>Log Out</h2>
        </div>
      </Container>)
  }
  return (
    <Container>
      <img src="/logo.png" alt="logo" />
      <div>

        <Link to="/signup">
          <h2>Log In</h2>
        </Link>
        <Link to="/signup">
          <PrimaryButton className="signup">Sign Up</PrimaryButton>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 60px;

  img {
    width: 90px;
    height: 40px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 220px;
    gap: 8px;

    @media (max-width: 460px) {
      flex-direction: column;
    }
  }

  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 200;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white;

    &:hover {
      border-bottom: 2px solid black;
    }
  }

  .signup {
    border: 2px solid black;
    padding: 7px 20px;
    &:hover {
      border: 2px solid grey;
      color: #313138;
    }
  }
  .iconLogo {
    width: 20px;
    height: 20px;
    margin: 0 30px;
}

`;

export default Header;
