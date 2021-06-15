import { ReactElement } from "react";

interface Props {
  spanSize?: number;
  minWidth?: number;
  [key: string]: any;
}

const Button = (props: Props): ReactElement => {
  const { spanSize, minWidth, children, ...rest } = props;
  const style = {
    backgroundColor: `${process.env.REACT_APP_COLOR}`,
    minWidth: `${minWidth}px`,
  };
  return (
    <button {...rest} className="button" style={style}>
      <span style={{ fontSize: `${spanSize}px` }}>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  spanSize: 25,
  minWidth: 190,
};

export default Button;
