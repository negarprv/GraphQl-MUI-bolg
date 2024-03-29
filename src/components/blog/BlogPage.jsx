import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

const BlogPage = () => {
  const { slug } = useParams();

  const { loading, errors, data } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (errors) return <h3>error</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          mt={9}
          xs={12}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <ArrowBackRoundedIcon
            style={{ color: "#3a4660", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <Typography
            ml={5}
            component="h2"
            variant="h4"
            color="#3a4660"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
        </Grid>

        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Link to={`/authors/${data.post.author.slug}`}>
            <Avatar
              src={data.post.author.avatar.url}
              sx={{ width: 80, height: 80, marginRight: 2 }}
            />
          </Link>

          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>

        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>

        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
