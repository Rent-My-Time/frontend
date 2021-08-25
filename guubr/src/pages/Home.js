import React, {useState, useContext, useRouteMatch } from 'react';
import Header from '../components/Header';
import Profile from '../components/home/Profile';
import Skill from '../components/home/Skill';
import Search from '../components/home/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import IconFooter from '../components/IconFooter';
import { UserListContext } from '../UserListContext';
import { MyContext } from "../Context";

function Home() {
  const [userList, setUserList] = useContext(UserListContext);
  const { user } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [expand, setExpand] = useState(false);

  const skillsList = ['Model', 'Actor', 'Bartender', 'Security', 'Nanny', 'App Developer',
                      'Web Designer', 'Personal Assistant', 'Self Development', 
                      'Photographer', 'Makeup Artist','Security Systems', 'Handyman', 
                      'Analytics', 'Marketing', 'Writer', 'Designer', 'Film Maker', 'Coach', 'Tax Consultant', 'Web Developer'];
  const highlightedSkills = ['Model', 'Actor', 'Bartender', 'Security', 'Nanny', 'App Developer',
                            'Web Designer', 'Personal Assistant', 'Self Development'];

  return (
    <Container>
      <Header />
      <Title>Market Place Where You Buy Peoples' Time</Title>
      <Search   
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div>
        {expand ? (
          <Skills>
           {skillsList.map((skill) => <Skill onClick={() => setSearchTerm(skill)}>{skill}</Skill>) }
          </Skills>
        ) : (
          <Skills>
            {highlightedSkills.map((skill) => <Skill onClick={() => setSearchTerm(skill)}>{skill}</Skill>) }
          </Skills>
        )}
      </div>

      <More onClick={() => setExpand(!expand)}>
        <p>{expand ? 'Less' : 'More'}</p>
        <img
          src={expand ? '/images/arrow-up.svg' : '/images/arrow-down.svg'}
          alt="arrow icon"
        />
      </More>

      <Discover>Discover Diverse Expertise</Discover>
      {userList && userList.map(userItem => console.log(userItem.occupation))}
      
      <Profiles>
        {userList && userList
          .filter(
            (userItem) =>
              userItem.occupation
              .toLowerCase()
              .includes(searchTerm && searchTerm.toLowerCase().trim()) 
                
          ).map((userItem) =>  <Link
            to={ userItem.id !== (user && user.email)  ? `/profile/details/${userItem.id}` : `/edit-profile/details/${userItem.id}`}
            key={`${userItem.id}`}
            style={{ textDecoration: 'none' }}>
            <Profile
              key={`${userItem.id}`}
              name={`${userItem.fullName.firstName}`}
              experties={userItem.occupation}
              rate={userItem.hourlyRate}
              photo={userItem.pic}
            /></Link>
            )}
      </Profiles>

      <More>
        <p>More</p>
        <img src="/images/arrow-down.svg" alt="arrow icon" />
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
