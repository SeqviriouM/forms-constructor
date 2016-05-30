import React from 'react';
import { Router, Route } from 'react-router';
import App from 'App';
import LoginPage from 'components/LoginPage';
import Login from 'components/Login';
import SignUp from 'components/SignUp';
import FormView from 'components/FormView';


export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='form-view' component={FormView} />
    </Route>
    <Route path='/' component={LoginPage}>
      <Route path='login' component={Login} />
      <Route path='signup' component={SignUp} />
    </Route>
  </Router>
);
