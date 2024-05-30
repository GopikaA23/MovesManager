import React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";

const HouseDetails = ({ detail }) => {
  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" fontWeight="bold">House Details</Typography>
            <Typography variant="h6" color="orangered" fontWeight="bold" sx={{ marginTop: 2 }}>Existing House Details</Typography>
            <Typography variant="h6">Floor No.</Typography>
            <Typography variant="subtitle1">{detail.old_floor_no}</Typography>
            <Typography variant="h6">Elevator Available.</Typography>
            <Typography variant="subtitle1">{detail.old_elevator_availability}</Typography>

            <Typography variant="h6" color="orangered" fontWeight="bold" sx={{ marginTop: 2 }}>New House Details</Typography>
            <Typography variant="h6">Floor No.</Typography>
            <Typography variant="subtitle1">{detail.new_floor_no}</Typography>
            <Typography variant="h6">Elevator Available.</Typography>
            <Typography variant="subtitle1">{detail.new_elevator_availability}</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ width: 200, backgroundColor: "black" }}>Edit House Details</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HouseDetails;
