import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Loader from './components/Loader';
import './App.css';

function App() {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">

      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <NavBar auth0={{isAuthenticated, loginWithRedirect, logout}}/>
        <header>
          <h1>Login Template</h1>
          <h2>
            <span>Using </span> 
            <span><a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a></span>
            <span> + </span> 
            <span><a href="https://swr.now.sh">SWR</a></span> 
            <span> + </span> 
            <span><a href="https://auth0.com">Auth0</a></span>
          </h2>
        </header>

        <Switch>
          <Route path="/" exact component={Home} auth0={{isAuthenticated, loginWithRedirect, logout}} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
