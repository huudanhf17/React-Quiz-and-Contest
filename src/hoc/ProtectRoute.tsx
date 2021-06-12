import { Redirect, Route } from "react-router";

interface Props {
  isAuth: boolean;
  component: React.FunctionComponent;
  [key: string]: any;
}

const ProtectRoute: React.FunctionComponent<Props> = (props) => {
  const { isAuth, component: Component, location, ...rest } = props;
  // const Component = component;

  return (
    <Route
      render={() => {
        if (isAuth === true) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/signin", state: { from: location } }} />
          );
        }
      }}
    ></Route>
  );
};

// ProtectRoute.defaultProps = {
//   isAuth: false,
// };

export default ProtectRoute;
