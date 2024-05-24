import React from "react";
import Avatar from "@mui/material/Avatar";
import imgSrc from "./avatar/th.jpg";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const skills = [
  "JavaScript",
  "React",
  "HTML-CSS",
  "NodeJS",
  "SQL",
  "MongoDB",
  "Redux",
];
const Businesscard = () => {
  return (
    <Card
      sx={{
        width: 345,
      }}
    >
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <Avatar
          src={imgSrc}
          alt="Tarek Habash"
          sx={{ width: 96, height: 96 }}
        />
      </Grid>

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Tarek Habash
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          5020, Salzburg, Austria
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Birthday: 10.07.1997
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          marginTop={4}
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Coding Skills
        </Typography>
        <Grid spacing={4}>
          {skills.map((skill, index) => (
            <Button variant="contained" sx={{ margin: "2px" }}>
              {skill}
            </Button>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Businesscard;
