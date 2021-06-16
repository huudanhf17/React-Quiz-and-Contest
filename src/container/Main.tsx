import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Challenge from "./Challenge";
import Result from "./Result";
import FOF from "../component/FOF";
import FOT from "../component/FOT";

interface Props {
  user: any;
  posted: any;
  results: any;
  setResults: any;
  setPosted: any;
  handleClickVariant: any;
  handleClickOpen: () => void;
}

const Main = (props: Props): ReactElement => {
  const {
    user,
    posted,
    results,
    setResults,
    setPosted,
    handleClickVariant,
    handleClickOpen,
  } = props;
  return (
    <Switch>
      <Route path="/result">
        <Result user={user} results={results}></Result>
      </Route>
      <Route path="/challenge">
        <Challenge
          user={user}
          posted={posted}
          results={results}
          setPosted={setPosted}
          setResults={setResults}
          handleClickVariant={handleClickVariant}
        ></Challenge>
      </Route>
      <Route path="/fot">
        <FOT />
      </Route>
      <Route exact path="/">
        <Home
          user={user}
          posted={posted}
          handleClickOpen={handleClickOpen}
          setPosted={setPosted}
        ></Home>
      </Route>
      <Route path="*">
        <FOF />
      </Route>
    </Switch>
  );
};

export default Main;
