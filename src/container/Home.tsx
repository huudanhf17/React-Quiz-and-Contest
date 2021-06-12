import { ReactElement } from "react";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { Grid, Typography } from "@material-ui/core";

const Home = (props: any): ReactElement => {
  return (
    <Grid container justify="center">
      <Grid item>
        <WarningRoundedIcon style={{ fontSize: 120, color: "orange" }} />
        <Typography variant="h5" component="h2">
          Are you ready for challenge?
        </Typography>
        <Typography variant="body1" component="h3">
          The quiz is ready to start, but you need to login first to accept it
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
