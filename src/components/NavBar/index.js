import React from "react";
import { Link } from "react-router-dom";
import logo from '../../media/logo.png';
import './index.css';

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = props.auth0;

  return (
    <nav>
      <a href="https://gemanepa.com">
        <img src={logo} title="gemanepa.com" alt=""/>
      </a>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          SIGNUP | LOGIN
        </button>
      )}

        {/* NEW - add a link to the home and profile pages */}
        {isAuthenticated && (
        <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
            <button onClick={() => logout()}>LOGOUT</button>
        </span>
        )}
    </nav>
  );
};

export default NavBar;