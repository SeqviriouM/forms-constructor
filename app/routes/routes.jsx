import React from 'react';
import { Router, Route } from 'react-router';
import App from 'App';
import LoginPage from 'components/LoginPage';
import Login from 'components/Login';


export default (
  <Router>
  <Route path='/' component={App} />
  <Route path='/' component={LoginPage}>
    <Route path='login' component={Login} />
  </Route>
  </Router>
);
