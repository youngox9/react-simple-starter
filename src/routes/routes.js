import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  HashRouter
} from "react-router-dom";

import Main from "@/pages/Main";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
