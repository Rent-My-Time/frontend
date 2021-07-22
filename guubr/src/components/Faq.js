import React from "react";
import styled from "styled-components";

function Faq(props) {
    return (
        <BoxFaq>
            <h1>{props.title}</h1>
            <h2>{props.text}</h2>
        </BoxFaq>
    )
  }

const BoxFaq = styled.div`
    border: 1px solid lightgrey;
    border-radius: 0;
    margin: 10px;
    padding: 5px 25px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 2px;
    box-shadow: 8.71957015991211px 8.71957015991211px 17.43914031982422px 0px
      #aeaec066;
    background: white;
    color: black;
`;

export default Faq;