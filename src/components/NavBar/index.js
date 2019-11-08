import React from "react";
import { Link } from "react-router-dom";
import logo from '../../media/logo.png';
import anonuser from '../../media/anonuser.png';
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
        <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
            <div className="navcolumn">
              <Link to="/profile"><img alt="user avatar" className="useravatar" src={anonuser} /></Link>
              <button onClick={() => loginWithRedirect({})}>SIGNUP<br/>LOGIN</button>
            </div>
        </span>

      )}

        {/* NEW - add a link to the home and profile pages */}
        {isAuthenticated && (
        <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
            <div className="navcolumn">
              <Link to="/profile"><img alt="user avatar" className="useravatar" src={user.picture} /></Link>
              <button onClick={() => logout()}>LOGOUT</button>
            </div>
        </span>
        )}
    </nav>
  );
};

export default NavBar;