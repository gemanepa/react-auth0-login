import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import RandomCuteAnimal from './components/RandomCuteAnimal';
import './App.css';

function App() {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();
  const dog = {
    type: 'dog',
    url:  'https://dog.ceo/api/breeds/image/random'
  }
  const cat = {
    type: 'cat',
    url:  'https://api.thecatapi.com/v1/images/search?size=med'
  }

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="App">

      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <NavBar auth0={{isAuthenticated, loginWithRedirect, logout}}/>
        <header>
          <h1 style={{textAlign: 'center'}}>Login Template</h1>
          <h2 style={{textAlign: 'center'}}>Using React Hooks + SWR + Auth0</h2>
        </header>

        {!isAuthenticated && (
        <>
          {/* <RandomCuteAnimal cuteAnimal={dog}/> */}
          <button
            onClick={() =>
              loginWithRedirect({})
            }
            style={{width: '10%', height: '100%'}}
          >
            Log in
          </button>
        </>)}

        {isAuthenticated && (
        <>
        {/* <RandomCuteAnimal cuteAnimal={cat}/> */}
        <button onClick={() => logout()}>Log out</button>
        </>)}

        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
