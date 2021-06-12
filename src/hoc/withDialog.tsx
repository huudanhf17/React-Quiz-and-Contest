import * as React from "react";

import Dialog from "../component/Dialog";

const withDialog = (WrappedComponent: any) => {
  return ({ isShowing, ...props }: any) => {
    if (!isShowing) {
      return null;
    }
    return <Dialog WrappedComponent={WrappedComponent} {...props} />;
  };
};

export default withDialog;
