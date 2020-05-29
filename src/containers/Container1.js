import React, { Component } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";

class Container1 extends Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.stateProp1)}>
          Get State
        </button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2 </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.stateProp1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
