import { ReactElement } from "react";
import { Typography } from "@material-ui/core";

const Footer = (): ReactElement => {
  return (
    <Typography variant="body1" component="span">
      @2021 - TMA - ReactJS Course
    </Typography>
  );
};

export default Footer;
