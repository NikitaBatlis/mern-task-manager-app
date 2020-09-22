import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from "react-router-dom";
//Import Styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Components
import App from './App';
import Welcome from './pages/welcome/Welcome.js';
import Login from './pages/login/Login.js';
import Signup from './pages/signup/Signup.js';
import Dashboard from './pages/dashboard/Dashboard.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
