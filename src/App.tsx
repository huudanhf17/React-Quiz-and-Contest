import { ReactElement } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
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
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Layout></Layout>
        </div>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
