import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "./Button";
import logo from "../logo.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    height: "80px",
  },
  logo: {
    maxHeight: "60px",
    width: "auto",
    padding: "8px",
  },
  tabs: {
    height: "80px",
  },
  tab: {
    height: "80px",
    fontWeight: "bolder",
    fontSize: "1rem",
  },
  grid: {
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const toggle = () => {
    console.log("toggle");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Grid container justify="space-between">
          <Grid item>
            <img src={logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item className={classes.grid}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                className={classes.tab}
              ></Tab>
              <Tab
                label="Quiz challenge"
                component={Link}
                to="/challenge"
                className={classes.tab}
                // onClick={!role ? toggle : () => {}}
              ></Tab>
              <Tab
                label="View result"
                component={Link}
                to="/result"
                className={classes.tab}
              ></Tab>
            </Tabs>
            <Button onClick={toggle}>Login</Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
