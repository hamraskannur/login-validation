import React from 'react';
import Authcontext from '../Authcontext/Auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <Authcontext.Consumer>
      {(cdx)=>{
        return (  <nav className={classes.nav}>
        <ul>
          {cdx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {cdx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {cdx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>)
      }}
  
    </Authcontext.Consumer>
  );
};

export default Navigation;
