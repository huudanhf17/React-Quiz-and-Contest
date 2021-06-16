import React from "react";
import { ReactElement } from "react";
import Header from "./Header";
import Footer from "../component/Footer";
import Main from "./Main";
import { Dialog, Slide, AppBar, Toolbar, IconButton } from "@material-ui/core/";
import { TransitionProps } from "@material-ui/core/transitions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { VariantType, useSnackbar } from "notistack";
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
  const [posted, setPosted] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (localStorage.getItem("remember")) {
      setUser(JSON.parse(localStorage.getItem("user") || "{}"));
      setResults(JSON.parse(localStorage.getItem("results") || "[]"));
    }
    localStorage.getItem("postedOnce") && setPosted(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickVariant = (content: string, variant: VariantType) => {
    enqueueSnackbar(content, { variant });
  };

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        handleClickOpen={handleClickOpen}
        setPosted={setPosted}
        handleClickVariant={handleClickVariant}
      ></Header>
      <Main
        user={user}
        posted={posted}
        results={results}
        handleClickOpen={handleClickOpen}
        setPosted={setPosted}
        setResults={setResults}
        handleClickVariant={handleClickVariant}
      ></Main>
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
        <Login
          handleClose={handleClose}
          user={user}
          setUser={setUser}
          handleClickVariant={handleClickVariant}
        ></Login>
      </Dialog>
    </>
  );
};

export default Layout;
