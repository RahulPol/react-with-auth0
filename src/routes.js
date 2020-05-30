import React, { Component } from "react";
import { Router, Route } from "react-router";

import Header from "./containers/Header";
import Container1 from "./containers/Container1";
import Component1 from "./functional/Component1";
import Component2 from "./functional/Component2";
import Component3 from "./functional/Component2";
import history from "./utils/history";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Container1} />
            <Route path="/component1" component={Component1} />
            <Route path="/component2" component={Component2} />
            <Route path="/component3" component={Component3} />
          </div>
        </Router>
      </div>
    );
  }
}
