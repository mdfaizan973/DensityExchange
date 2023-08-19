import React from "react";
import { Button, Container, Typography } from "@mui/material";
export default function GetStarted() {
  return (
    <div style={{ margin: "80px auto", width: "95%" }}>
      <Container
        maxWidth="sm"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <Typography variant="h6">We take privacy seriously</Typography>
        <Typography
          style={{ fontWeight: "bold", marginTop: "15px" }}
          variant="h4"
        >
          Before you get started
        </Typography>
        <Typography style={{ marginTop: "15px" }} variant="h6">
          "We won't shate your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Typography variant="h6">With love</Typography>
          <img
            src="https://www.scienceofpeople.com/wp-content/uploads/2018/11/Big-Signature.png"
            alt="Signature"
            style={{ width: "150px", marginLeft: "10px" }}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            borderRadius: "30px",
            marginTop: "25px",
            padding: "12px 20px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Start a test
        </Button>

        <Typography style={{ marginTop: "15px" }}>
          Take only 5 minutes
        </Typography>
      </Container>
    </div>
  );
}
