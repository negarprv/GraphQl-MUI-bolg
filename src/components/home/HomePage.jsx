import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../authors/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        spacing={2}
      >
        <Grid mt={4} item xs={12} md={3}>
          <Typography
            textAlign="end"
            component="h3"
            variant="h5"
            mb={3}
            fontWeight={700}
            color={"#2d2d2d"}
          >
            Authors
          </Typography>
          <Authors />
        </Grid>
        <Grid mt={4} item xs={12} md={9}>
          <Typography
            textAlign="end"
            component="h3"
            variant="h5"
            mb={3}
            color={"#2d2d2d"}
            fontWeight={700}
          >
            Blogs
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
