import './App.css';
import './components/FaqPage/FaqPage.css';
import './components/ProfilePage/ProfilePage.module.css';
import FaqPage from './components/FaqPage/FaqPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <div className="FaqPage">
       <FaqPage/>
      </div>
    </div>
  );
}

export default App;