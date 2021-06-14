import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

interface Props {
  handleClickOpen: () => void;
}

const Main = (props: Props): ReactElement => {
  const { handleClickOpen } = props;
  return (
    <Switch>
      <Route path="/">
        <Home handleClickOpen={handleClickOpen}></Home>
      </Route>
    </Switch>
  );
};

export default Main;
