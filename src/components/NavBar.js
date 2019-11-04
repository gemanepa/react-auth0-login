import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import logo from '../logo.png';
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <a style={{width: 'auto', height:'auto'}} href="https://gemanepa.com">
        <img src={logo} title="gemanepa.com" alt="" style={{width: '150px', height: 'auto'}}/>
      </a>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        {/* NEW - add a link to the home and profile pages */}
        {isAuthenticated && (
        <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
        </span>
        )}
    </div>
  );
};

export default NavBar;