import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AccountBox from "./pages/userAccountBox/index";
import FaqPage from "./pages/FaqPage/FaqPage";
import BookingPage from "./pages/BookingPage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
//db imports
import firebase from "./firebase";
import "firebase/firestore";

function App() {
  useEffect(() => {
    const db = firebase.firestore();
    const users = db.collection("users").doc("inneHPnUttDcKfPXS6oN");
    users.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={AccountBox} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/booking" exact component={BookingPage} />

        {/* render master component EditProfilePage with its children */}
        <Route path="/edit-profile" exact component={EditProfilePage} />
        <Route path="/edit-contacts" exact component={EditProfilePage} />
        <Route path="/edit-skills" exact component={EditProfilePage} />
        <Route path="/edit-availability" exact component={EditProfilePage} />

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
