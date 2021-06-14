import { ReactElement } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./container/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${process.env.REACT_APP_COLOR}`,
    },
  },
});

function App(): ReactElement {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Layout></Layout>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
