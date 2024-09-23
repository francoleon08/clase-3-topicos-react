import React from "react";
import ReactDOM from "react-dom";
import MiCompSalud from "./MiCompSalud";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompSalud />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  