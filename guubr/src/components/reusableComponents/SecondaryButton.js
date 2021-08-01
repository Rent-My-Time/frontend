import React from "react";
import styled from "styled-components";

function SecondaryButton({ children,  onClick, style  }) {
  return <Button onClick={onClick} style={style}>{children}</Button>;
}

const Button = styled.button`
  background: #ffffff;
  border: 2px solid lightgrey;
  height: 38px;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  padding: 0 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default SecondaryButton;
