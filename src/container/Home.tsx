import { ReactElement } from "react";
import { Link } from "react-router-dom";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import { Box, Grid, Typography, Button as MButton } from "@material-ui/core";
import Button from "../component/Button";

const Home = (props: any): ReactElement => {
  const { user, handleClickOpen } = props;
  const style = { minHeight: "85.186vh" };
  return (
    <Grid container justify="center" alignItems="center" style={style}>
      <Grid item>
        <Box m={1}>
          {user ? (
            <InfoRoundedIcon style={{ fontSize: 120 }} color="primary" />
          ) : (
            <WarningRoundedIcon style={{ fontSize: 120, color: "orange" }} />
          )}
        </Box>
        <Box m={1}>
          <Typography variant="h5" component="h2">
            {user ? "Challenge accepted" : "Are you ready for challenge?"}
          </Typography>
        </Box>
        <Box m={1}>
          <Typography variant="body1" component="h3">
            {user
              ? "You have not finished your challenge yet. Get it now to receive your ranking"
              : "The quiz is ready to start, but you need to login first to accept it"}
          </Typography>
        </Box>
        <Box m={2} mb={5}>
          {user ? (
            <MButton
              variant="contained"
              color="primary"
              size="large"
              style={{ fontWeight: "bolder", minHeight: "53px" }}
              component={Link}
              to="./challenge"
            >
              Go to Quiz challenge
            </MButton>
          ) : (
            <Button spanSize={18} minWidth={280} onClick={handleClickOpen}>
              Login to your account
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
