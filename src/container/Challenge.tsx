import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Grid,
  Button,
  Step,
  Stepper,
  StepLabel,
} from "@material-ui/core/";
import { getActiveStep, getQuiz, getSteps, postResult } from "../ulti/fetcher";
import TabPanel from "../component/TabPanel";
import Home from "./Home";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    minHeight: "85.186vh",
    width: "1600px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export default function Challenge(props: any) {
  const { user, posted, results, setResults, setPosted, handleClickVariant } =
    props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dataQuiz, setDataQuiz] = React.useState([]);
  const [answers, setAnswers] = React.useState<{}[]>([]);
  const steps = getSteps();
  const activeStep = getActiveStep();

  React.useEffect(() => {
    user && getQuiz(setDataQuiz);
  }, [user]);
  React.useEffect(() => {
    document.title = "Challenger - Quiz Web App";
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (answers.length >= newValue) {
      setValue(newValue);
    } else {
      handleClickVariant(
        "You have to answer current question to see the next one",
        "warning",
      );
    }
  };

  const handleSubmitResult = () => {
    if (answers.length < dataQuiz.length) {
      handleClickVariant(
        "You have to answer all the question to submit",
        "warning",
      );
      return;
    }
    postResult(
      setResults,
      results,
      dataQuiz.length,
      handleClickVariant,
      answers,
    );
    setPosted(true);
    localStorage.setItem("postedOnce", JSON.stringify(true));
  };

  return (
    <>
      {!user ? (
        <Redirect to="/fot" />
      ) : posted ? (
        <Home user={true} posted={posted} setPosted={setPosted} />
      ) : (
        <div className={classes.root}>
          <Grid item></Grid>
          <Box mb={2} mt={5}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h5" component="h5">
                  Question list for React challenger: {value + 1}/
                  {dataQuiz.length}
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmitResult}
              >
                Submit result
              </Button>
            </Grid>
          </Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              {dataQuiz.map((quiz: any) => (
                <Tab
                  key={quiz.id}
                  label={`Q${quiz.id}`}
                  {...a11yProps(quiz.id)}
                />
              ))}
            </Tabs>
          </AppBar>
          {dataQuiz.map((quiz: any) => (
            <TabPanel
              key={quiz.id}
              value={value}
              index={quiz.id - 1}
              quiz={quiz}
              answers={answers}
              setAnswers={setAnswers}
            ></TabPanel>
          ))}
          <Grid item style={{ minWidth: "800px" }}>
            <Box m={2}>
              <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
        </div>
      )}
    </>
  );
}
