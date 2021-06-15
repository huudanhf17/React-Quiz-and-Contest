import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../component/Button";
import logo from "../logo.png";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button as MButton,
  AppBar,
  Tabs,
  Tab,
  Grid,
  Avatar,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Box,
  ClickAwayListener,
} from "@material-ui/core/";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    minHeight: "80px",
    height: "7.407vh",
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
    alignItems: "center",
  },
  userRoot: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

interface Props {
  user: any;
  setUser: any;
  handleClickOpen: () => void;
}

export default function Header(props: Props) {
  const { user, setUser, handleClickOpen } = props;
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    let pathname = location.pathname;
    if (pathname === "/result") {
      setValue(2);
    } else if (pathname === "/challenge") {
      setValue(1);
    } else if (pathname === "/") {
      setValue(0);
    }
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const toggle = () => {
    handleClickOpen();
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    localStorage.clear();
    setUser(null);
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
            {user ? (
              <Box mr={2}>
                <div className={classes.userRoot}>
                  <div>
                    <MButton
                      ref={anchorRef}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      <Avatar
                        alt="avatar"
                        src={`static/images/avatar/1.jpg`}
                        className={classes.avatar}
                      />
                      {user.id}
                    </MButton>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="menu-list-grow"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleClose}>
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </div>
              </Box>
            ) : (
              <Button onClick={toggle}>Login</Button>
            )}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
