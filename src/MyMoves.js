import React, { useState } from "react";
import { Typography, Card, Container, CardContent, Button, Grid, Stack } from "@mui/material";
import sample_data from "./sample_data";
import ViewMoveDetails from "./ViewMoveDetails";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WarningIcon from '@mui/icons-material/Warning';
import { CheckBox } from "@mui/icons-material";
import Calandar from "./Calandar";

const MyMoves = () => {
  const details = sample_data;
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleViewMoveBtnClick = (detail) => {
    setSelectedDetail(detail);
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <Typography variant="h4" fontWeight="bold">My Moves</Typography>
          {details.Customer_Estimate_Flow.map((detail, index) => (
            <CardContent key={index}>
              <Card variant="outlined">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="bold">From</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{detail.moving_from}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <ArrowCircleRightIcon/>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="bold">To</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{detail.moving_to}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6" fontWeight="bold">Request#</Typography>
                    <Typography variant="h7" color="orangered" fontSize="20px" fontWeight="bold">{detail.estimate_id}</Typography>
                  </Grid>
                </Grid>
                   
                   <br/>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={2}>
                  <Stack direction="row">
                    <HomeIcon/>
                    <Typography variant="subtitle1" color="text.secondary">{detail.property_size}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={2}>
                    <Stack direction="row">
                    <LocationOnIcon/>
                    <Typography variant="subtitle1" color="text.secondary">{detail.distance}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={2}>
                    <Calandar/>
                    </Grid>
                    <Grid item xs={2}>
                    <Stack direction="row">
                    <CheckBox checked={detail.packing_service === "yes"} sx={{color: "orangered"}}/>
                    <Typography variant="subtitle1" color="text.secondary">Is Flexible</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={2}>
                  <Button onClick={() => handleViewMoveBtnClick(detail)} variant="outlined" size="small" sx={{borderColor:"orangered", color:"orangered"}}>
                    View Move Details
                  </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" size="small" sx={{backgroundColor:"orangered"}}>Quotes Awaiting</Button>
                    </Grid>
                </Grid>
         
                <br/>

                <Stack direction="row">
                <WarningIcon/>
                <Typography variant="h6" fontSize="18px" fontWeight="bold">Disclaimer:</Typography>
                
                <Typography variant="subtitle1" color="text.secondary">
                  Please update your move date before two days of shifting
                </Typography>
                </Stack>
              </Card>
              {/* Conditionally render ViewMoveDetails below the clicked card */}
              {selectedDetail && selectedDetail.estimate_id === detail.estimate_id && (
                <ViewMoveDetails detail={selectedDetail} />
              )}
            </CardContent>
          ))}
      </div>
    </Container>
  );
}

export default MyMoves;
