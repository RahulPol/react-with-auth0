// First step is to import action_types, golder source for action types.
import * as ACTION_TYPES from "../actions/action_types";

// create initial state. This is your actual redux state.
const initialState = {
  user_text: "",
};

// create reducer function.
// the reducer function takes two parameter, state & action. The state is of type root state and has default value
// equals intialState.
const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INPUT:
      return { ...state, user_text: action.payload };
    default:
      return state;
  }
};

export default user_reducer;
