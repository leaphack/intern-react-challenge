import React from "react";
import Avatar from "@mui/material/Avatar";
import imgSrc from "./avatar/th.jpg";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

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
          sx={{ width: 86, height: 86 }}
        />
      </Grid>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tarek Habash
        </Typography>
        <Typography variant="body2" color="text.secondary">
          5020, Salzburg, Austria
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Birthday: 10.07.1997
        </Typography>

        <Typography variant="h5" component="div">
          Coding Skills
        </Typography>
        <Grid spacing={4}>
          {["JavaScript", "React", "HTML-CSS"].map((skill, index) => (
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
