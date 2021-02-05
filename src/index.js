import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
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
  const [search, setSearch] = useState('');
  const [user_id, setUserId] = useState('');
  const [posts, setPosts] = useState('');
  const [messages, setMessages] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [listings, setListings] = useState('');
  //user information
  //create log out function that calls all pieces of state back to their original.
  //clear local storage
  const logOut = () => {
    setSearch('');
    setPosts('');
    setMessages('');
    setLoginSuccessful(false);
    setListings('');
    setUserId('');
    localStorage.clear();
    return <Redirect to="/login"/>;
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
            {localStorage.getItem('user') ? <li onClick={logOut}><a href="#">Log Out of {localStorage.getItem('user')}</a></li> : <li><Link to="/login">Login</Link></li>}
          </ul>
        </nav>
        <Route path="/home">
          <Home search={search} setSearch={setSearch}/>
        </Route>
        <Route path="/profile">
          <Profile listings={listings} setListings={setListings}/>
        </Route>
        <Route path="/listings">
          <Listings listings={listings} setListings={setListings} user_id={user_id} setUserId={setUserId}/>
        </Route>
        <Route path="/login">
          <Login 
            loginSuccessful={loginSuccessful} 
            setLoginSuccessful={setLoginSuccessful}
            user_id={user_id}
            setUserId={setUserId}
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