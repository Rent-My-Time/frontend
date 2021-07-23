import React from "react";
import styled from "styled-components";

function PrimaryTextArea(props) {
  return (
    <StyledTextArea
      ref={props.ref}
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

const StyledTextArea = styled.textarea`
  outline: none;
  border: 2px solid lightgrey;
  margin: 4px 0;
  padding: 10px;
  box-sizing: border-box;
  letter-spacing: 2px;
  resize: none;
  width: 100%;

  ::placeholder {
    color: #a6a6a6;
    font-family: Helvetica, Arial, sans-serif;
  }

  &:focus {
    border: 2px solid #006ee6;
  }
`;

export default PrimaryTextArea;
