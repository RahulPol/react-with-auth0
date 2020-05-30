import React, { Component } from "react";
import { connect } from "react-redux";
import Quote from "inspirational-quotes";

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
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action CREATOR 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action CREATOR 2
        </button>
        <button onClick={() => this.props.action_userInput()}>
          Dispatch USER INPUT
        </button>
        <div>
          <span>State:</span>
          <br />
          StateProp1: {this.props.stateProp1.toString()}
          <br />
          User Text:
          {this.props.user_text ? <span>{this.props.user_text}</span> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.stateProp1,
    user_text: state.user_text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_userInput: () =>
      dispatch(ACTIONS.user_input(Quote.getRandomQuote())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
