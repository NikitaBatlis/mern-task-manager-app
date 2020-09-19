import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
//Imports styles
import './App.css';
//Import Pages
import Welcome from './pages/welcome/Welcome.js';
import Login from './pages/login/Login.js';
import Signup from './pages/signup/Signup.js';
import Dashboard from './pages/dashboard/Dashboard.js';

export default function App() {

  return (
    <div className= "routerWrapper">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/dashboard" exact component={Dashboard}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}
