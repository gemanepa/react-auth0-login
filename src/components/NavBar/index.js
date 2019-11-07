import React from "react";
import { Link } from "react-router-dom";
import logo from '../../media/logo.png';
import { useAuth0 } from "../../react-auth0-spa";
import './index.css';

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav>
      <a href="https://gemanepa.com">
        <img src={logo} className="devlogo" title="gemanepa.com" alt=""/>
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
            <button onClick={() => logout()} className="navcolumn">
              <img alt="user avatar" className="useravatar" src={user.picture} /> 
              <p>LOGOUT</p>
            </button>
        </span>
        )}
    </nav>
  );
};

export default NavBar;