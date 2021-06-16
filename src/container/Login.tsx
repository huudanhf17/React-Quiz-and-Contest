import { ReactElement } from "react";
import logo from "../logo.png";
import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button as MButton,
} from "@material-ui/core/";

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
  const { handleClose, setUser, handleClickVariant } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [userName, setUserName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const style = { minHeight: "85.186vh" };
  const imgStyle = { maxWidth: "120px", height: "auto", margin: "12px" };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChangeUn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleChangePa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const handleSignIn = (event: React.MouseEvent) => {
    if (!userName.trim()) {
      handleClickVariant(`Please type your Username`, "warning");
      return;
    }
    if (!pass.trim()) {
      handleClickVariant(`Please type your Password`, "warning");
      return;
    }
    const newUser = {
      id: userName,
    };
    setUser(newUser);
    if (checked) {
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("remember", JSON.stringify(true));
    }
    handleClickVariant(`Welcome ${userName}`, "success");
    handleClose();
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
              onChange={handleChangePa}
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
