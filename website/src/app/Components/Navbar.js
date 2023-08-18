import React from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        width: "100%", // Set the width to 100% for full screen
        left: 0, // Align to the left edge
      }}
    >
      <Container maxWidth="xl">
        {" "}
        {/* Use maxWidth to expand Container */}
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt="logo"
            src="https://i.pinimg.com/564x/6c/85/7e/6c857efd866376a46abff877af8befca.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer" }}
            >
              Emotions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer" }}
            >
              Emotions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer" }}
            >
              Emotions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer" }}
            >
              Emotions
            </Typography>
          </div>

          <Typography variant="h6" component="div" sx={{ color: "white" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                borderRadius: "30px",
                padding: "12px 20px",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              Download App
            </Button>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
