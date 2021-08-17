import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import ContextProvider from "./Context";
import "./App.css";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AccountBox from "./pages/userAccountBox/index";
import FaqPage from "./pages/FaqPage/FaqPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
import LoginGooglePage from "./pages/LoginGooglePage";
import AddUserPage from "./pages/AddUserPage";
import UserListContextProvider from "./UserListContext";

function App() {
  return (
    <ContextProvider>
      <UserListContextProvider>

        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={AccountBox} />
            <Route path="/faq" exact component={FaqPage} />
            <Route path="/book/:id" exact component={BookingPage} />
            <Route path="/payment" exact component={PaymentPage} />

            <Route path="/loginGoogle" exact component={LoginGooglePage} />
            <Route path="/addUser" exact component={AddUserPage} />


            {/* render master component EditProfilePage with its children */}
            <Route exact path="/edit-profile/details/:id" component={EditProfilePage} />
            <Route exact path="/edit-profile/contacts/:id" component={EditProfilePage} />
            <Route exact path="/edit-profile/skills/:id" component={EditProfilePage} />
            <Route exact path="/edit-profile/availability/:id" component={EditProfilePage} />
            <Route path="/edit-profile/" component={EditProfilePage} />

            {/* render master component ProfilePage with its children */}
            <Route exact path="/profile/details/:id" component={ProfilePage} />
            <Route exact path="/profile/contacts/:id" component={ProfilePage} />
            <Route exact path="/profile/skills/:id" component={ProfilePage} />
            <Route exact path="/profile/availability/:id" component={ProfilePage} />
            <Route path="/profile/" component={ProfilePage} />
          </Switch>
        </Router>
      </UserListContextProvider>
    </ContextProvider>
  );
}

export default App;
