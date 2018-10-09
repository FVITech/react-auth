import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, SignInScreen, SignUpScreen, ForgotPasswordScreen, ResetPasswordScreen } from './screens';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/sign-in" component={SignInScreen} />
        <Route exact path="/sign-up" component={SignUpScreen} />
        <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
        <Route exact path="/reset-password" component={ResetPasswordScreen} />
        
        <Route path="/" component={HomeScreen} />
      </Switch>
    </div>
  </Router>
);

export default Routes;