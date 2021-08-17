import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
      <p className="company">@ 2021 Guubr Company</p>
      <Link to="" style={{ textDecoration: 'none' }}>
        <p>Privacy</p>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}>
        <p>Terms</p>
      </Link>
      <Link to="/faq" style={{ textDecoration: 'none' }}>
        <p>FAQ</p>
      </Link>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  margin: 150px 60px 10px 60px;
  font-family: Helvetica, Arial, sans-serif;
  border-top: 1px solid #dddddd;
  bottom: 0;

  p {
    padding: 0 20px;
  }

  .company {
    border-right: 1px solid #dddddd;
    padding: 0 10px;
  }
`;

export default Footer;
