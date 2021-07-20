import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile-page" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}
export default App;
