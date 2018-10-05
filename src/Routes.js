import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, SignInScreen, SignUpScreen } from './screens';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/sign-in" component={SignInScreen} />
        <Route exact path="/sign-up" component={SignUpScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </div>
  </Router>
);

export default Routes;