import React from "react";
import { Container, Grid, Typography, CardMedia } from "@mui/material";

const MeetAhead = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "25px",
        background: "#fef7f1",
        borderRadius: "20px",
      }}
    >
      <Container
        style={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "40px",
          padding: 0,
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <Typography
                  style={{
                    fontSize: "1.3rem",
                    position: "relative",
                    top: "50px",
                    left: "70px",
                  }}
                >
                  Built out of frustration
                </Typography>
                <Typography
                  style={{
                    fontWeight: "bold",
                    position: "relative",
                    left: "70px",
                    top: "70px",
                  }}
                  variant="h3"
                >
                  Meet the ahead app
                </Typography>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/106812942/261792143-42b6ddf9-17ec-4a0e-aed1-ffcd9757ccfc.png"
                  alt="Meeting"
                  style={{ width: "100%", marginTop: "70px" }}
                />
              </div>
            </div>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Typography variant="h5" sx={{ color: "grey" }}>
                A personalized pocket coach that provides bite- <br />
                sized, science-driven toold emotional <br /> intellignece.
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "20px", color: "grey" }}
              >
                Think of it as a pocket cheerleader towards a <br />
                better, move fulfilling.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MeetAhead;
