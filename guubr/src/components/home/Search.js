import React from 'react';
import styled from 'styled-components';

function Search({searchTerm, setSearchTerm}) {

  return (
    <Container>
      <SearchBox>
        <label htmlFor="searchTerm">
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            value={searchTerm}
            placeholder="What are you looking for?"
            onChange={(e) => setSearchTerm(e.target.value)}
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
  box-shadow: 10px 10px 90px 0px #aeaec066;


  @media (max-width: 768px) {
    width: 500px;   
  }

  label > input {
    outline: none;
    border: none;
    border-radius: 0;
    margin-left: 30px;
    letter-spacing: 2px;

    ::placeholder {
      min-width: 300px;
      color: #a6a6a6;
    }

    @media (max-width: 768px) {
      padding-left: 25px;
      margin-left: 55px;
    }
  }

  #searchTerm {
    min-width: 200px;
    padding-right: 160px;
    height: 30px;
  }

  img {
    padding-right: 20px;
    cursor: pointer;
  }
`;

export default Search;
