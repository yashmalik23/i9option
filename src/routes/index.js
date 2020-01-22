import React from "react";
import { Header } from "../components";
import { LandingPage } from "../containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class RouteNames extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default RouteNames;
