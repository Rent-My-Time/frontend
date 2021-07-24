import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as IconHouse } from "../assets/home_house_icon.svg";
import { ReactComponent as IconSearch } from "../assets/search_magnifier_icon.svg";
import { ReactComponent as IconMsg } from "../assets/balloon_bubble_chat_comments_speech_icon.svg";
import { ReactComponent as IconUser } from "../assets/user_circle_male_avatar_account_icon.svg";

function IconFooter() {
  return (
    <IconContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <IconHouse className="iconLogo"/>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <IconSearch className="iconLogo"/>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
             <IconMsg className="iconLogo"/>
         </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
             <IconUser className="iconLogo"/>
        </Link>
    </IconContainer>
  );
}

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    position: relative;
    bottom: +100px;
    .iconLogo {
        width: 20px;
        height: 20px;
        margin: 0 30px;
    }
`;

export default IconFooter;