import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ padding: "5px" }}>
          Container 1
        </Link>
        <Link to="/component1" style={{ padding: "5px" }}>
          Component 1
        </Link>
        <Link to="/component2" style={{ padding: "5px" }}>
          Component 2
        </Link>
        <Link to="/component3" style={{ padding: "5px" }}>
          Component 3
        </Link>
      </div>
    );
  }
}
