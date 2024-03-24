import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOG_COMMENTS } from "../../graphql/queries";

import { Avatar, Box, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });
  console.log(data);
  const { comments = [] } = data;

  if (loading) return null;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        marginTop: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="#3a4660">
          Comments
        </Typography>
        {comments &&
          comments.map((comment, i) => (
            <Grid
              item
              key={comment.id}
              xs={12}
              m={2}
              p={2}
              borderBottom={i !== comments.length - 1 ? "1px silver solid" : ""}
              borderRadius={1}
            >
              <Box component="div" display="flex" alignItems="center" mb={3}>
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  ml={1}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography variant="p" component="p">
                {comment.text}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
