//import logo from './logo.svg';
import "./App.css";
import React from "react";
import ProfilePhoto from "./profile/MyProfilePhoto";
import MyFullName from "./profile/MyFullName";
import MyAddress from "./profile/MyAdress";

function App() {
  return (
    <React.Fragment>
      <ProfilePhoto />
      <MyFullName />
      <MyAddress />
    </React.Fragment>
  );
}

export default App;
