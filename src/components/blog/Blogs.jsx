import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardElement from "../shared/CardElement";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;

  if (errors) return <h4>Error...</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardElement post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
