import React, { Fragment } from 'react';
import Two from 'components/Two';
import classes from './style.less';

const One = () => (
  <Fragment>
    <div className={classes.one}>Hello from One</div>
    <Two />
  </Fragment>
);

export default One;
