import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MyContext } from "../Context";

function HeaderFaq() {
    const {user} = useContext(MyContext);
    let showName = "";

    if (user) {
        showName = user.displayName;
      } else {
        showName = "not logged in";
      }

    return(
        <ContainerHeaderFaq>
            <div>
                <p>USER: {showName}</p>
            </div>
             <Link to="/">
                <p>HOME</p>
            </Link>
        </ContainerHeaderFaq>

    )
}

const ContainerHeaderFaq = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 25px 60px;
    gap: 10px;
    color: var(--guubr-letter2);
    img {
        width: 90px;
        height: 40px;
      }
`;

export default HeaderFaq;