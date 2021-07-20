import React from "react";
import Header from "../components/home/Header";
import Profile from "../components/home/Profile";
import Skill from "../components/home/Skill";
import Search from "../components/home/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Header />
      <Title>Market Place Where You Buy Peoples' Time</Title>
      <Search />
      <Skills>
        <Skill>Model</Skill>
        <Skill>Actor</Skill>
        <Skill>Bartender</Skill>
        <Skill>Security</Skill>
        <Skill>Nanny</Skill>
        <Skill>App Developer</Skill>
        <Skill>Web Designer</Skill>
        <Skill>Personal Assistant</Skill>
        <Skill>Self Development</Skill>
      </Skills>
      <More>
        <p>More</p> <img src="/images/arrow.svg" alt="arrow icon" />
      </More>
      <Discover>Discover Diverse Expertise</Discover>
      <Profiles>
        <Link to={`/profile-page`}>
          <Profile
            name="Elina"
            experties="Coach"
            rate="199"
            photo="/images/profile2.png"
          />
        </Link>
        <Profile
          name="Elina"
          experties="Coach"
          rate="199"
          photo="/images/profile2.png"
        />
        <Profile
          name="Elina"
          experties="Coach"
          rate="199"
          photo="/images/profile2.png"
        />
        <Profile
          name="Oleg"
          experties="Dancer"
          rate="115"
          photo="/images/profile1.png"
        />
        <Profile
          name="Oleg"
          experties="Dancer"
          rate="115"
          photo="/images/profile1.png"
        />
        <Profile
          name="Oleg"
          experties="Dancer"
          rate="115"
          photo="/images/profile1.png"
        />
      </Profiles>
      <More>
        <p>More</p> <img src="/images/arrow.svg" alt="arrow icon" />
      </More>
    </Container>
  );
}

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding-left: 4px;
    font-size: 12px;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  max-width: 800px;
  margin-top: 100px;
`;

const More = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 55px 0 100px 0;
  cursor: pointer;

  p {
    letter-spacing: 4px;
    color: grey;
  }

  img {
    width: 30px;
    height: 30px;
    margin-top: -15px;
  }
`;

const Discover = styled(Title)`
  font-size: 20px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Profiles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 60px auto 0 auto;
`;

export default Home;
