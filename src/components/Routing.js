import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

const Dialogs = () => {
  return <h1>DIALOGS</h1>;
};

const Profile = () => {
  return <h1>PROFILE</h1>;
};

const News = () => {
  return <h1>NEWS</h1>;
};

const Music = () => {
  return <h1>MUSIC</h1>;
};

const Settings = () => {
  return <h1>SETTINGS</h1>;
};

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news">News</NavLink>
      </div>
      <div>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
