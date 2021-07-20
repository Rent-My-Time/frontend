import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <img src="/logo.png" alt="logo" />
      <div>
        <h2>Log In</h2>
        <h2 className="signup">Sign Up</h2>
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
    min-width: 200px;

    @media (max-width: 460px) {
      flex-direction: column;
    }
  }

  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 200;
    font-size: 16px;
    cursor: pointer;
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
`;

export default Header;
