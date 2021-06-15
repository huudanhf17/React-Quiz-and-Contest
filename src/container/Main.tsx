import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Challenge from "./Challenge";

interface Props {
  user: any;
  handleClickOpen: () => void;
}

const Main = (props: Props): ReactElement => {
  const { user, handleClickOpen } = props;
  return (
    <Switch>
      <Route path="/challenge">
        <Challenge></Challenge>
      </Route>
      <Route path="/">
        <Home user={user} handleClickOpen={handleClickOpen}></Home>
      </Route>
    </Switch>
  );
};

export default Main;
