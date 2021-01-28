import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import { 
  Header,
  Home,
  Listings,
  Profile,
  Login,
  Footer
 } from './components';

const App = () => {
  //Potential state
  //Logged in or not
  const [logIn, setLogIn] = useState(false);
  //user information

  return (
    <div className="app">
      <Header/>
      {/* <Button color="primary">Hello World</Button> */}
      <Router>
        <nav>
          <ul className="links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/listings">Listings</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <div className="input-div">
            <form className="input-box">
              <label>Search for listings</label>
              <input/>
            </form>
          </div>
        </nav>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/listings">
          <Listings/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);