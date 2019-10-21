import React from 'react';
import One from 'components/One';
import classes from './style.css';
import { libraryFunction } from 'my-library';

const App = () => (
  <div className={classes.container}>
    <div className={classes.app}>
      <div>{libraryFunction()}</div>
      <One />
    </div>
  </div>
);

export default App;
