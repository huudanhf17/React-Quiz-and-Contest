import { Box } from "@material-ui/core/";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";

interface TabPanelProps {
  quiz: any;
  answers: any;
  setAnswers: any;
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { quiz, answers, setAnswers, children, value, index, ...other } = props;
  const [valueRadio, setValueRadio] = React.useState("");
  let tempAnswers = answers;

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio((event.target as HTMLInputElement).value);
    tempAnswers.forEach((value: any, index: number) => {
      value.id === quiz.id && tempAnswers.splice(index, 1);
    });
    tempAnswers = [
      { id: Number(event.target.name), choice: event.target.value },
      ...tempAnswers,
    ];
    setAnswers(tempAnswers);
  };

  return (
    <div
      style={{ textAlign: "left" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ margin: "12px" }}>
              <Typography variant="h5" component="h5" color="primary">
                {quiz.id}. {quiz.question}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name={String(quiz.id)}
              value={valueRadio}
              onChange={handleChangeRadio}
            >
              {Object.entries(quiz.choices).map(([k, v]: any) => (
                <FormControlLabel
                  key={k}
                  value={k}
                  control={<Radio color="primary" />}
                  label={`${k}: ${v}`}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
