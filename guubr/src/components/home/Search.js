import React, { useRef } from 'react';
import styled from 'styled-components';

function Search() {
  const searchTerm = useRef('');
  const location = useRef('');

  return (
    <Container>
      <SearchBox>
        <label htmlFor="searchTerm">
          <input
            ref={searchTerm}
            type="text"
            id="searchTerm"
            name="searchTerm"
            placeholder="What are you looking for?"
          />
        </label>
        <label htmlFor="location">
          <input
            ref={location}
            type="text"
            id="location"
            name="location"
            placeholder="Where?"
          />
        </label>
        <img src="/images/Search.svg" alt="" />
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-family: Helvetica, Arial, sans-serif;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 60px;
  border: 1px solid #ededed;
  box-shadow: 10px 10px 30px 0px #aeaec066;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 500px;
    height: 100px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
  }

  label > input {
    outline: none;
    border: none;
    border-radius: 0;
    margin-left: 30px;
    letter-spacing: 2px;

    ::placeholder {
      color: #a6a6a6;
    }

    @media (max-width: 768px) {
      padding-left: 25px;
      margin-left: 55px;
    }
  }

  #searchTerm {
    min-width: 200px;
    border-right: 1px solid #acacac;
    padding-right: 160px;
    height: 30px;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #acacac;
      padding-top: 10px;
    }
  }

  #location {
    @media (max-width: 768px) {
      padding-top: 15px;
    }
  }

  img {
    padding-right: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: auto;
      padding-bottom: 20px;
    }
  }
`;

export default Search;
