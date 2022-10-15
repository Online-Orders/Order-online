import React from 'react';
import classes from './errorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={classes.error}>
      <h3>Something went wrong. Seems like you have come to the wrong page.</h3>

      <Link className={classes.link} to="/">
        <button className={classes.btn}>Return</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
