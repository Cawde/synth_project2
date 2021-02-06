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
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [posts, setPosts] = useState([]);
  //user information
  //create log out function that calls all pieces of state back to their original.
  //clear local storage
  const logOut = () => {
    setLoginSuccessful(false);
    setPosts([]);
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
            {localStorage.getItem('user') && <li><Link to="/profile">Profile</Link></li>}
            <li><Link to="/listings">Listings</Link></li>
            {localStorage.getItem('user') ? <li onClick={logOut}><a href="#">Log Out of {localStorage.getItem('user')}</a></li> : <li><Link to="/login">Login</Link></li>}
          </ul>
        </nav>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile posts={posts} setPosts={setPosts}/>
        </Route>
        <Route path="/listings">
          <Listings posts={posts} setPosts={setPosts}/>
        </Route>
        <Route path="/login">
          <Login 
            loginSuccessful={loginSuccessful} 
            setLoginSuccessful={setLoginSuccessful}
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