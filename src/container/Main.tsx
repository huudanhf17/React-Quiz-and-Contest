import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const Main = (): ReactElement => {
  return (
    <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
};

export default Main;
