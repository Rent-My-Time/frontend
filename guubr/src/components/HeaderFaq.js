import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HeaderFaq() {
    return(
        <ContainerHeaderFaq>
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
    img {
        width: 90px;
        height: 40px;
      }
`;

export default HeaderFaq;