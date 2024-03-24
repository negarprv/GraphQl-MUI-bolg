import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardElement from "../shared/CardElement";
import Loader from "../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();

  const {
    loading,
    data = {},
    errors,
  } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  const { author } = data;

  if (loading) return <Loader />;
  if (errors) return <h3>error</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 200, height: 200 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {author.description}
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            {author.name} blogs
          </Typography>

          <Grid container spacing={2} mt={2}>
            {author.posts &&
              author.posts.map((post) => (
                <Grid item key={post.id}>
                  <CardElement post={post} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
