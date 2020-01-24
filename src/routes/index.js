import React from "react";
import { Header } from "../components";
import { LandingPage, HomePage } from "../containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class RouteNames extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default RouteNames;
