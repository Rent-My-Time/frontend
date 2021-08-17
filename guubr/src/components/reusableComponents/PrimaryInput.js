import React from "react";
import styled from "styled-components";

function PrimaryInput(props) {
  return (
    <StyledInput
      ref={props.ref}
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      disabled={props.disabled}

    />
  );
}

const StyledInput = styled.input`
  outline: none;
  border-bottom: 2px solid lightgrey;
  margin: 4px 0;
  padding: 10px 0px 10px 10px;
  letter-spacing: 2px;
  width:100%;
  ::placeholder {
    color: #a6a6a6;
  }

  &:focus {
    border-bottom: 2px solid #006ee6;
  }
`;

export default PrimaryInput;
