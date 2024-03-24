import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutation";
import Loader from "../shared/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, slug, text },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("All Fields Must Be Filled.", { position: "top-center" });
    }
  };

  if (errors) {
    toast.error("There is an error", { position: "top-center" });
  }

  if (data) {
    toast.success("Comment Sent. Wainting For Approval.", {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="#3a4660">
          Comment
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="Text"
          variant="outlined"
          minRows="5"
          multiline
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3a4660",
            ":hover": {
              backgroundColor: "#3a4660",
              filter: "brightness(130%)",
            },
          }}
          onClick={sendHandler}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
