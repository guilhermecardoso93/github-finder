import { Outlet } from "react-router-dom";

import classes from './App.module.css';

export const App = () => {
  return (
    <div className={classes.app}>
      <h1>Guilherme</h1>
      <Outlet />
    </div>
  );
};
