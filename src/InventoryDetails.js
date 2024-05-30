import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const InventoryDetails = ({ detail }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="space-between">
        <Grid item>
        <Typography variant="h6" fontWeight="bold">Inventory Details</Typography>
      {detail.items.inventory.map((item, index) => (
        <div key={index}>
          <h4 onClick={() => handleClick(index)} style={{ cursor: "pointer", color:"orangered", fontSize:"20px" }} >
            {item.displayName}
          </h4>
          {selectedCategoryIndex === index && (
  <div style={{ display: "flex", flexDirection: "row" }}>
    {item.category &&
      item.category.map((values, i) => (
        <div key={i} style={{ marginRight: "20px" }}>
          <Typography variant="h6" fontWeight="bold" marginLeft="30px">{values.displayName}</Typography>
          {values.items.map((re, r) => (
            <div key={r} style={{ display: "flex", flexDirection: "column", marginLeft:"30px" }}>
              <Stack direction="row" justifyContent="space-between" spacing={4} marginTop="20px">
              <Typography variant="h6" sx={{width:200}}>{re.displayName}</Typography>
              <Typography variant="h6" fontWeight="bold">{re.qty > 0 ? re.qty : ""}</Typography>
              </Stack>
              <Typography variant="h5">{re.type.selected && re.type.option}</Typography>
            </div>
          ))}
        </div>
      ))}
  </div>
)}

        </div>
      ))}
            </Grid>
        <Grid item>
        <Button variant="contained" sx={{width:200, backgroundColor:"black"}}>Edit Inventory</Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default InventoryDetails;
