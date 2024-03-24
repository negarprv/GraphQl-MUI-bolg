import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardElement = ({ post }) => {
  const { title, slug, coverPhoto } = post;
  let author;
  if (post.author) {
    author = post.author;
  }

  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        height: author ? "400px" : "100%",
        maxHeight: "500px",
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar sx={{ marginLeft: 2 }} src={author.avatar.url} />}
          title={
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          variant="h7"
          fontWeight={600}
          component="h3"
          color="text.primary"
        >
          {title}
        </Typography>
      </CardContent>

      <Divider variant="middle" sx={{ margin: "5px" }} />

      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            Read blog
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardElement;
