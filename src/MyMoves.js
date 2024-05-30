import React, { useState } from "react";
import { Typography, Card, Container, CardContent, Button, Grid, Stack } from "@mui/material";
import sample_data from "./sample_data";
import ViewMoveDetails from "./ViewMoveDetails";
import Calandar from "./Calandar";
import {
  ArrowCircleRight as ArrowCircleRightIcon,
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
  Warning as WarningIcon,
  EditOutlined as EditOutlinedIcon,
  CalendarMonthOutlined as CalendarMonthOutlinedIcon,
  CheckBox
} from '@mui/icons-material';

const MyMoves = () => {
  const details = sample_data;
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleViewMoveBtnClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked)
  }

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <Typography variant="h5" fontWeight="bold">My Moves</Typography>

          {details.Customer_Estimate_Flow.map((detail, index) => (
            <CardContent key={index}>
              <Card variant="outlined">
                <Grid container spacing={2} alignItems="center">

                  <Grid item xs={4}>   {/* From details */}
                    <Typography variant="h7" fontWeight="bold">From</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{detail.moving_from}</Typography>
                  </Grid>
                  
                  <Grid item xs={2}>   {/* Symbol  */}
                    <ArrowCircleRightIcon fontSize="medium" sx={{color:"orangered"}}/>
                  </Grid>

                  <Grid item xs={4}>   {/* To details  */}
                    <Typography variant="h7" fontWeight="bold">To</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{detail.moving_to}</Typography>
                  </Grid>

                  <Grid item xs={1}>  {/* Estimate id  */}
                    <Typography variant="h6" fontWeight="bold">Request#</Typography>
                    <Typography variant="h7" color="orangered"  fontWeight="bold">{detail.estimate_id}</Typography>
                  </Grid>

                </Grid>
                   
                <br/>

                <Grid container spacing={2} alignItems="center">

                  <Grid item xs={1.5}>   {/* Property Size  */}
                    <Stack direction="row">
                      <HomeIcon fontSize="medium" sx={{color:"orangered"}}/>
                      <Typography variant="subtitle1" color="text.secondary">{detail.property_size}</Typography>
                    </Stack>
                  </Grid>
                  
                  <Grid item xs={1.5}>   {/* distance  */}
                    <Stack direction="row">
                      <LocationOnIcon fontSize="medium" sx={{color:"orangered"}}/>
                      <Typography variant="subtitle1" color="text.secondary">{detail.distance}</Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={3}>  {/* moving on date and time  */}
                    <Stack direction="row">
                      <CalendarMonthOutlinedIcon fontSize="medium" sx={{color:"orangered"}}/>
                      <Typography variant="subtitle1" color="text.secondary">{detail.moving_on}</Typography>
                      <EditOutlinedIcon onClick={handleEditClick}/>
                      {isEditClicked && <Calandar/>}
                    </Stack>
                  </Grid>

                  <Grid item xs={2}>   {/* flexible  */}
                    <Stack direction="row">
                      <CheckBox checked={detail.packing_service === "yes"} sx={{color: "orangered"}}/>
                      <Typography variant="subtitle1" color="text.secondary">Is Flexible</Typography>
                    </Stack>
                  </Grid>

                  {/* Buttons */}
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

                <Stack direction="row">   {/* Disclaimer  */}
                  <WarningIcon fontSize="medium" sx={{color: "orangered"}}/>
                  <Typography variant="h7" fontWeight="bold">Disclaimer:</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Please update your move date before two days of shifting
                  </Typography>
                </Stack>
              </Card>

              {/* Conditionally render ViewMoveDetails */}
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
