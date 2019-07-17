import React, { Fragment } from "react";
import { Provider } from "../src/store/StoreProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Dashboard, Books, Users } from "./screens";

const App = () => {
  return (
    <Provider>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
