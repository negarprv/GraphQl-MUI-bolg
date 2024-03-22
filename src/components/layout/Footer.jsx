import { Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="p"
        variant="p"
        fontWeight="300"
        bgcolor="#3a4660"
        color="#FAF9F6"
        padding="14px "
        sx={{ wordSpacing: "2px" }}
        textAlign="center"
        borderRadius="10px"
        mt={10}
      >
        Weblog project using GraphQl and MUI by Negar
      </Typography>
    </Container>
  );
};

export default Footer;
