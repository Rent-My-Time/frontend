

import styled from "styled-components";
 import AccountBox  from "./components/userAccountBox";
 




function App() {
  return (
    <div className="App">
      <header className="App-header">Guubr
          <AppContainer>

             <AccountBox />

          </AppContainer>
      </header>
    </div>
  );

  }

  export default App;

  const AppContainer= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
