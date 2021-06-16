import React, { ReactElement } from "react";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import fofImage from "../fof.png";

const FOF = (): ReactElement => {
  React.useEffect(() => {
    document.title = "404 - Quiz Web App";
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
          404
        </Typography>
        <Typography variant="body1" component="span">
          Sorry, you have accessed a non-exsiting route
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

export default FOF;
