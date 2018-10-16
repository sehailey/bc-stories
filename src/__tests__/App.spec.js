import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Router } from "react-router";
import history from "../history";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
