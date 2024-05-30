import { Button, Stack, Typography, Container, Grid } from "@mui/material";
import React from "react";

const AdditionalInfo = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="space-between">
        <Grid item>
            <Typography variant="h6" fontWeight="bold">Additional Information</Typography>
          <Typography variant="subtitle1" color="text.secondary">Test Data</Typography>
            
        </Grid>
        <Grid item>
        <Button variant="contained" sx={{width:200,backgroundColor:"black"}}>Edit Additional Info</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdditionalInfo;
