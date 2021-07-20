import React from 'react';
import styled from 'styled-components';

function Skill({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  min-width: 140px;
  height: 42px;
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 0 25px;
  font-family: Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  box-shadow: 8.71957015991211px 8.71957015991211px 17.43914031982422px 0px
    #aeaec066;
  background: white;
  color: black;
  cursor: pointer;
`;

export default Skill;
