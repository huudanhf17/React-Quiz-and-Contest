import { ReactElement } from "react";
import logo from "../logo.png";
import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { Checkbox, Button as MButton } from "@material-ui/core/";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      minWidth: "380px",
    },
    button: {
      minWidth: "380px",
      minHeight: "56px",
    },
  }),
);

interface Props {
  handleClose: () => void;
  user: any;
  setUser: any;
  [key: string]: any;
}

const Login = (props: Props): ReactElement => {
  const { handleClose, setUser, user } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [userName, setUserName] = React.useState("");
  const style = { minHeight: "85.186vh" };
  const imgStyle = { maxWidth: "120px", height: "auto", margin: "12px" };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChangeUn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleSignIn = (event: React.MouseEvent) => {
    setUser({
      id: userName,
      remember: checked,
    });
  };
  return (
    <Grid container justify="center" alignItems="center" style={style}>
      <Grid item>
        <Box m={1}>
          <Grid container justify="center" alignItems="center">
            <img src={logo} alt="logo" style={imgStyle} />
            <Typography variant="h2" component="h1">
              Quiz app
            </Typography>
          </Grid>
        </Box>
        <Grid container justify="center" alignItems="center" direction="column">
          <Box m={1}>
            <TextField
              className={classes.margin}
              id="input-username"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChangeUn}
            />
          </Box>
          <Box m={1}>
            <TextField
              className={classes.margin}
              id="input-password"
              label="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRoundedIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Box m={1} ml={2}>
              <FormControl component="fieldset">
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      checked={checked}
                      onChange={handleChange}
                    />
                  }
                  label="Remember me"
                  labelPlacement="end"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <Box mr={2}>
              <Typography variant="body1" component="span" color="primary">
                Forgot your password?
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box m={1} ml={2} mr={2}>
          <MButton
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSignIn}
          >
            Sign In
          </MButton>
        </Box>
        <Box m={2}>
          <MButton
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleClose}
          >
            Cancel
          </MButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
