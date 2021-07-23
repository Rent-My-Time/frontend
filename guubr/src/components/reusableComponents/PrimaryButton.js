import React from "react";
import styled from "styled-components";

function PrimaryButton({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  background: #006ee6;
  box-shadow: 0px 2px 1px #0041cb;
  height: 38px;
  width: 100%;
  color: #f2f2f2;
  font-size: 16px;
  font-weight: 300;
  padding: 0 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default PrimaryButton;
