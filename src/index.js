import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import { 
  Home,
  Header,
  Listings,
  Profile,
  Login,
  Footer
 } from './components';

const App = () => {
  //Potential state
  //Logged in or not
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState('');
  const [messages, setMessages] = useState('');
  const [submittedSuccessful, setSubmittedSuccessful] = useState(false);
  const [token, setToken] = useState('');
  const [listings, setListings] = useState('');
  //user information
  //create log out function that calls all pieces of state back to their original.
  //clear local storage
  const logOut = () => {
    setLogin(false);
    setSearch('');
    setUser('');
    setPosts('');
    setMessages('');
    setSubmittedSuccessful(false);
    setToken('');
    setListings('');
  }

  return (
    <div className="app">
      <Header/>
      <Router>
        <nav>
          <ul className="links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* {logIn ? <li><Link to="/profile">Profile</Link></li> : null} */}
            <li><Link to="/listings">Listings</Link></li>
            {/* set the state back to normal */}
            {submittedSuccessful ? <li onClick={logOut}>Log Out</li> : <li><Link to="/login">Login</Link></li>}
            {submittedSuccessful ? <li className="user">Hi, {user}</li>: null}
          </ul>
        </nav>
        <Route path="/home">
          <Home search={search} setSearch={setSearch}/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/listings">
          <Listings listings={listings} setListings={setListings}/>
        </Route>
        <Route path="/login">
          <Login 
            token={token}
            setToken={setToken}
            login={login} 
            setLogin={setLogin} 
            user={user} 
            setUser={setUser}
            submittedSuccessful={submittedSuccessful} 
            setSubmittedSuccessful={setSubmittedSuccessful}
          />
        </Route>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);