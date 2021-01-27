import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { 
  Header,
  Home,
  Listings,
  Profile,
  Footer
 } from './components';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Button color="primary">Hello World</Button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);