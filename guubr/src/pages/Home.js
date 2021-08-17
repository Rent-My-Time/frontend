import React, { useContext, useRouteMatch } from 'react';
import Header from '../components/Header';
import Profile from '../components/home/Profile';
import Skill from '../components/home/Skill';
import Search from '../components/home/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import IconFooter from '../components/IconFooter';
import { UserListContext } from '../UserListContext';

function Home() {
  const [userList, setUserList] = useContext(UserListContext)

  console.log(userList)

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
        <p>More</p>
        <img src="/images/arrow.svg" alt="arrow icon" />
      </More>
      <Discover>Discover Diverse Expertise</Discover>
      <Profiles>
        {userList && userList.map((user, index) => {
          return (
            <Link
              to={`/profile/details/${user.id}`}
              key={`${user.id}`}
              style={{ textDecoration: 'none' }}>
              <Profile
                key={`${user.id}`}
                name={`${user.fullName.firstName}`}
                experties={user.occupation}
                rate={user.hourlyRate}
                photo={user.website}
              /></Link>)
        })}
        
      </Profiles>
      <More>
        <p>More</p>
        <img src="/images/arrow.svg" alt="arrow icon" />
      </More>
      <Footer />
      <IconFooter />
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
    margin-bottom: 7px;
    letter-spacing: 4px;
    color: #474747;
  }

  img {
    width: 30px;
    height: 30px;
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
