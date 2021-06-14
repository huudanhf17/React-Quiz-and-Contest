import { ReactElement } from "react";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { Box, Grid, Typography } from "@material-ui/core";
import Button from "../component/Button";

const Home = (props: any): ReactElement => {
  const { handleClickOpen } = props;
  const style = { minHeight: "85.186vh" };
  return (
    <Grid container justify="center" alignItems="center" style={style}>
      <Grid item>
        <Box m={1}>
          <WarningRoundedIcon style={{ fontSize: 120, color: "orange" }} />
        </Box>
        <Box m={1}>
          <Typography variant="h5" component="h2">
            Are you ready for challenge?
          </Typography>
        </Box>
        <Box m={1}>
          <Typography variant="body1" component="h3">
            The quiz is ready to start, but you need to login first to accept it
          </Typography>
        </Box>
        <Box m={1} mb={5}>
          <Button spanSize={18} minWidth={280} onClick={handleClickOpen}>
            Login to your account
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
