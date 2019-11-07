import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Loader from './components/Loader';
import auth0logo from './media/auth0.jpg';
import swrlogo from './media/swr.jpg';
import hookslogo from './media/hooks.jpg';
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
          <a href="https://reactjs.org/docs/hooks-intro.html" title="React Hooks">
            <img alt="React Hooks" src={hookslogo} />
          </a>
          <a href="https://swr.now.sh" title="SWR">
            <img alt="SWR" src={swrlogo} />
          </a>
          <a href="https://auth0.com" title="Auth0">
            <img alt="Auth0" src={auth0logo} />
          </a>
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
