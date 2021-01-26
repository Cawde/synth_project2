import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

const App = () => {
  return (
    <div id="App">
      <Button color="primary">Hello World</Button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);