import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core/";
import { getQuiz } from "../ulti/fetcher";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
  },
}));

export default function Challenge() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dataQuiz, setDataQuiz] = React.useState([]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    getQuiz(setDataQuiz);
  }, []);

  return (
    <div className={classes.root}>
      <Box m={2} mt={5}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" component="h5">
              Question list for React challenger: {value + 1}/{dataQuiz.length}
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {dataQuiz.map((quiz: any) => (
            <Tab key={quiz.id} label={`Q${quiz.id}`} {...a11yProps(quiz.id)} />
          ))}
        </Tabs>
      </AppBar>
      {dataQuiz.map((quiz: any) => (
        <TabPanel key={quiz.id} value={value} index={quiz.id - 1}>
          {quiz.question}
        </TabPanel>
      ))}
    </div>
  );
}
