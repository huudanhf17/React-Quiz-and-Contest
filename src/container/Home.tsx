import { ReactElement } from "react";
import { Link, useHistory } from "react-router-dom";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import {
  Box,
  Grid,
  Typography,
  Button as MButton,
  Step,
  Stepper,
  StepLabel,
} from "@material-ui/core";
import Button from "../component/Button";
import { getActiveStep, getSteps } from "../ulti/fetcher";

const Home = (props: any): ReactElement => {
  const { user, posted, setPosted, handleClickOpen } = props;
  const history = useHistory();
  const steps = getSteps();
  const activeStep = getActiveStep();

  const handleTryAgain = () => {
    setPosted(false);
    history.push("/");
  };

  return (
    <Grid
      container
      justify="space-between"
      direction="column"
      alignItems="center"
      style={{ minHeight: "85.186vh" }}
    >
      <Grid item></Grid>
      <Grid item>
        <Box m={1}>
          {user && !posted ? (
            <InfoRoundedIcon style={{ fontSize: 120 }} color="primary" />
          ) : posted ? (
            <CheckCircleRoundedIcon
              style={{ fontSize: 120, color: "#52C41A" }}
            />
          ) : (
            <WarningRoundedIcon style={{ fontSize: 120, color: "orange" }} />
          )}
        </Box>
        <Box m={1}>
          <Typography variant="h5" component="h2">
            {user && !posted
              ? "Challenge accepted!"
              : posted
              ? "You have finished your contest!"
              : "Are you ready for challenge?"}
          </Typography>
        </Box>
        <Box m={1}>
          <Typography variant="body1" component="h3">
            {user && !posted
              ? "You have not finished your challenge yet. Get it now to receive your ranking."
              : posted
              ? "You have finished the Quiz challenge. You can view you score or take the challenge again."
              : "The quiz is ready to start, but you need to login first to accept it."}
          </Typography>
        </Box>
        <Box m={2} mb={5}>
          {user && !posted ? (
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
          ) : posted ? (
            <Grid container justify="center">
              <Box m={1}>
                <MButton
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  to="./result"
                >
                  View result
                </MButton>
              </Box>
              <Box m={1}>
                <MButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={handleTryAgain}
                >
                  Try again
                </MButton>
              </Box>
            </Grid>
          ) : (
            <Button spanSize={18} minWidth={280} onClick={handleClickOpen}>
              Login to your account
            </Button>
          )}
        </Box>
      </Grid>
      <Grid item style={{ minWidth: "800px" }}>
        <Box m={2}>
          <Stepper alternativeLabel activeStep={user ? activeStep : 0}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
