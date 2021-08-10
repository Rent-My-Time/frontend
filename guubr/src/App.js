import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import ContextProvider from "./Context";
import "./App.css";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AccountBox from "./pages/userAccountBox/index";
import FaqPage from "./pages/FaqPage/FaqPage";
import BookingPage from "./pages/BookingPage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
import LoginGooglePage from "./pages/LoginGooglePage";
import AddUserPage from "./pages/AddUserPage";
import UserListContextProvider from "./UserListContext";

//db imports
import firebase from "./firebase";
import "firebase/firestore";
import ProfileContextProvider from "./ProfileContext";

function App() {
  return (
    <ContextProvider>
      <UserListContextProvider>

        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={AccountBox} />
            <Route path="/faq" exact component={FaqPage} />
            <Route path="/booking" exact component={BookingPage} />

            <Route path="/loginGoogle" exact component={LoginGooglePage} />
            <Route path="/addUser" exact component={AddUserPage} />


            {/* render master component EditProfilePage with its children */}
            <Route exact path="/edit-profile" component={EditProfilePage} />
            <Route exact path="/edit-contacts" component={EditProfilePage} />
            <Route exact path="/edit-skills" component={EditProfilePage} />
            <Route exact path="/edit-availability" component={EditProfilePage} />

            {/* render master component ProfilePage with its children */}
            <Route exact path="/profile/details/:id" component={ProfilePage} />
            <Route path="/profile/" component={ProfilePage} />
          </Switch>
        </Router>
      </UserListContextProvider>
    </ContextProvider>
  );
}

export default App;
