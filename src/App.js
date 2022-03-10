import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Footer from "./Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  // 1.1 keep track who is logged in
  useEffect(() => {
    // will only run once whtn the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if(auth){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
     // BEM Block Element Methods
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
