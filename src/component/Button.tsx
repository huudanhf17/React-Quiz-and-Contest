import React, { ReactElement } from "react";

interface Props {
  [key: string]: any;
}

const Button = (props: Props): ReactElement => {
  const { children, ...rest } = props;
  const style = { backgroundColor: `${process.env.REACT_APP_COLOR}` };
  return (
    <button {...rest} className="button" style={style}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
