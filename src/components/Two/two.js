import React, { Fragment } from 'react';
import Three from 'components/Three';
import classes from './style.sass';

const Two = () => (
  <Fragment>
    <div className={classes.two}>Hello from Two</div>
    <Three />
  </Fragment>
);

export default Two;
