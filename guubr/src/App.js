import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AccountBox from "./pages/userAccountBox/index";
import FaqPage from "./pages/FaqPage/FaqPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={AccountBox} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/booking" exact component={BookingPage} />
        <Route path="/profile-page" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}
export default App;
