import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
  const {loginSuccessful, setLoginSuccessful} = props;
  let pass = '';
  let user = '';

  const storeToken = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  const registerUser = (event) => {
    event.preventDefault();
    fetch("https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: user,
          password: pass
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        alert(result.success ? result.data.message : result.error.message);
        setLoginSuccessful(result.success);
        storeToken(result.data.token, user);
      }).catch(console.error);
  }
  
const loginUser = (event) => {
  event.preventDefault();
  fetch("https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: user,
        password: pass
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      alert(result.success ? result.data.message : result.error.message);
      setLoginSuccessful(result.success);
      storeToken(result.data.token, user);
    }).catch(console.error);
}

if (loginSuccessful) {
  return <Redirect to="/profile"/>;
}


  return (
    <div className="login">
      <h1>Register or Sign in below</h1>
      <form className="input-box" onSubmit={registerUser}>
        <div className="container">
          <label><b>Enter Username</b></label>
          <input 
            type="text" 
            name="uname" 
            placeholder="Enter Username" required 
            onChange={(event)=> {user = event.target.value}}
            />

          <label><b>Enter Password</b></label>
          <input 
            type="password" 
            name="pass"
            pattern=".{8,16}" 
            title="8 or more characters" 
            size="20" 
            placeholder="Enter Password" required
            onChange={(event)=> {pass = event.target.value}}
            />
          <hr/>
          <button
            type="submit" 
            className="registerbtn" 
            >Register</button>
          <h2><b>Already have an account?</b> <button type="submit" className="sign-in-btn" onClick={loginUser}>Sign In</button></h2>
        </div>
      </form>
    </div>
  )
}

export default Login;