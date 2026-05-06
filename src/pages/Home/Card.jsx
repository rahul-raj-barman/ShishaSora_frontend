import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Box } from "@mui/material";

export default function ({ image, subject, desc, price }) {
  const randomClass = Math.floor(Math.random() * 5) + 6;
  return (
    <>
      <Card sx={{ maxWidth: 310 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Box sx={{ mb: 1 }}>
            <Chip label={`Class ${randomClass}`} size="small" color="primary" />
          </Box>

          <Typography gutterBottom variant="h5" component="div">
            {subject}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" size="small">
            ₹{price}
          </Typography>
          <Button variant="contained" color="success">
            Enroll Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
