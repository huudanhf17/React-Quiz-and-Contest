import React from "react";
import { ReactElement } from "react";
import Header from "./Header";
import Footer from "../component/Footer";
import Main from "./Main";
import { Dialog, Slide, AppBar, Toolbar, IconButton } from "@material-ui/core/";
import { TransitionProps } from "@material-ui/core/transitions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import Login from "./Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Layout = (): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        handleClickOpen={handleClickOpen}
      ></Header>
      <Main user={user} handleClickOpen={handleClickOpen}></Main>
      <Footer></Footer>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBackRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Login handleClose={handleClose} user={user} setUser={setUser}></Login>
      </Dialog>
    </>
  );
};

export default Layout;
