import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const cardData = [
  {
    title: "Senior Full-Stack Engineer",
    data: [
      "Full time position",
      "Berlin or remote",
      "$65-86k, 0.5-1.50% equity share option",
    ],
  },
  {
    title: "Senior Designer",
    data: [
      "Full time position",
      "Berlin or remote",
      "$40-55k, 0.25-0.50% equity share option",
    ],
  },
  {
    title: "Superstar Intern",
    data: [
      "Full time position",
      "Berlin or remote",
      "$20-24, 0.5-1.50% equity share option",
    ],
  },
];

export default function Vacancies() {
  return (
    <div style={{ width: "87%", margin: "80px auto" }}>
      <Typography style={{ fontWeight: "600" }} variant="h4">
        Open vacancies
      </Typography>

      <Grid container spacing={4} style={{ marginTop: "50px" }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                padding: "16px",
                borderRadius: "15px",
                backgroundColor: "#fefbec",
              }}
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="h5"
                  component="div"
                >
                  {card.title}
                </Typography>
                <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  {card.data.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{ fontWeight: "bold", marginTop: "15px" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
