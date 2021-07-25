import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AccountBox from "./pages/userAccountBox/index";
import FaqPage from "./pages/FaqPage/FaqPage";
import BookingPage from "./pages/BookingPage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={AccountBox} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/booking" exact component={BookingPage} />

        {/* render master component EditProfilePage with its children */}
        <Route path="/edit-profile" exact component={EditProfilePage}/>
        <Route path="/edit-contacts" exact component={EditProfilePage}/>
        <Route path="/edit-skills" exact component={EditProfilePage}/>
        <Route path="/edit-availability" exact component={EditProfilePage}/>

        {/* render master component ProfilePage with its children */}
        <Route path="/my-info" exact component={ProfilePage} />
        <Route path="/my-contacts" exact component={ProfilePage} />
        <Route path="/my-skills" exact component={ProfilePage} />
        <Route path="/availability" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
