import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

import './App.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="App">

      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <NavBar />
        <header>
          <h1 style={{textAlign: 'center'}}>Login Template</h1>
          <h2 style={{textAlign: 'center'}}>Using React Hooks + SWR + Auth0</h2>
        </header>

        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
