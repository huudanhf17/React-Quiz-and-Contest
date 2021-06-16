import React, { ReactElement } from "react";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import fofImage from "../fot.png";

const FOT = (): ReactElement => {
  React.useEffect(() => {
    document.title = "403 - Quiz Web App";
  }, []);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "85.186vh" }}
    >
      <Grid item>
        <img src={fofImage} alt="404" />
        <Typography variant="h1" component="h1">
          403
        </Typography>
        <Typography variant="body1" component="span">
          Sorry, you are not authorized to access this page.
        </Typography>
        <Box m={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/"
          >
            Back Home
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FOT;
