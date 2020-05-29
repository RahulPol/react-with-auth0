import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import all redux related dependancies
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer1 from "./store/reducers/reducer1";

// Create redux store
let store = createStore(reducer1);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
