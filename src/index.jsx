import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import { Math4Kids } from "./component/app";
import configureStore from "./store";

const store = configureStore()

const app = (
  <Provider store={store}>
    <Math4Kids />
  </Provider>
);
const here = document.querySelector("#here");

render(app, here);
