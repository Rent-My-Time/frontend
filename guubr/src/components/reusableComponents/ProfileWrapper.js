import React from 'react';
import styled from 'styled-components';

function ProfileWrapper(props) {
  return (
    <Container>
      <img src={`/images/${props.photo}`} alt="profile" />
      <Info>
        <Name>{props.name}</Name>
        <div>
          <div>{props.experties}</div>
          <div>${props.rate}/hr</div>
        </div>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  min-width: 40%;
  max-height: 360px;
  margin: 20px 0px;
  background: #f7f7f7;
  border: 1px solid lightgrey;
  box-shadow: 0px 69.27113342285156px 50.798831939697266px 0px #0000000e;
  cursor: pointer;

  img {
    width: 88%;
    max-height: 250px;
    margin: 12px auto 20px auto;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
  font-family: Helvetica, Arial, sans-serif;
  outline: none;
  color: black;
  font-size: 12px;
  div {
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
    div:nth-child(2) {
      color: #a30815;
    }
  }
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export default ProfileWrapper;