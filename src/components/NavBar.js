import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = props.auth0;

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <a style={{width: 'auto', height:'auto'}} href="https://gemanepa.com">
        <img src={logo} title="gemanepa.com" alt="" style={{width: '150px', height: 'auto', opacity: 0}}/>
      </a>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
          style={{width: 'auto', height: 'auto', backgroundColor: 'transparent', border: '0px', color: 'darkred', fontSize: '150%', cursor: 'pointer'}}
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