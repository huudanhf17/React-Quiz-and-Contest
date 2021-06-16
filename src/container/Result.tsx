import React, { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Box,
  Paper,
  Typography,
  Step,
  Stepper,
  StepLabel,
  Grid,
} from "@material-ui/core";
import { getSteps } from "../ulti/fetcher";

const useStyles = makeStyles({
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
  table: {
    minWidth: 650,
  },
});

const Result = (props: any): ReactElement => {
  const { user, results } = props;
  const classes = useStyles();
  const steps = getSteps();
  const activeStep = 3;
  React.useEffect(() => {
    document.title = "Result - Quiz Web App";
  }, []);
  return (
    <>
      {!user ? (
        <Redirect to="/fot" />
      ) : (
        <div className={classes.root}>
          <Grid item></Grid>
          <Box mb={2} mt={5}>
            <Box m={2}>
              <Typography variant="h4" component="h2" color="primary">
                Result History
              </Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Qty</TableCell>
                    <TableCell align="center">Result</TableCell>
                    <TableCell align="center">Incorrect Anwser(s)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results
                    .map((row: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          {results.length - index}
                        </TableCell>
                        <TableCell align="center">{row.result}</TableCell>
                        <TableCell align="center">
                          {row.incorrectAnswers}
                        </TableCell>
                      </TableRow>
                    ))
                    .reverse()}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
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
};

export default Result;
