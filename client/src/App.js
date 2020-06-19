import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
