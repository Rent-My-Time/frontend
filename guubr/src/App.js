import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AccountBox from "./components/userAccountBox/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={AccountBox} />
        <Route path="/profile-page" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}
export default App;
