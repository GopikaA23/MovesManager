import React, { useState } from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const InventoryDetails = ({ detail }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [isItemClicked, setIsItemClicked] = useState(false);

 const handleItemClick = (index) => {
  setSelectedCategoryIndex(prevIndex => prevIndex === index ? null : index);
  setIsItemClicked(!isItemClicked);
};

// calculate count for each inventory items
  const calculateCountForItem = (displayName) => {
    let count = 0;

    if (detail && detail.items && detail.items.inventory) {
      detail.items.inventory.forEach((item) => {
        if (item.displayName === displayName) {
          item.category.forEach((category) => {
            category.items.forEach((itemDetail) => {
              if (itemDetail.qty > 0) {
                count++;
              }
            });
          });
        }
      });
    }

    return count;
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="space-between">
     
        <Grid item xs={7.8}>
          <Typography variant="h6" fontWeight="bold">Inventory Details</Typography>
        </Grid>

        <Grid item xs={2.2}> 
          <Button variant="contained" sx={{ width: '200px', backgroundColor: "black" }}>Edit Inventory</Button>
        </Grid>

        <Grid item xs={12}>
          {detail.items.inventory.map((item, index) => (
            <div key={index}>
              <h4 
                onClick={() => handleItemClick(index)} 
                style={{ cursor: "pointer", color: "orangered", fontSize: "18px", backgroundColor: "lightgrey", padding:"4px" }}
              >
                {selectedCategoryIndex === index && isItemClicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                {item.displayName} ({calculateCountForItem(item.displayName)}) 
              </h4>

              {selectedCategoryIndex === index && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {item.category &&
                    item.category.map((category, i) => (

                    // Check if category has items
                    category.items.some(itemDetail => itemDetail.qty > 0) && (
                      <div key={i} style={{ marginRight: "20px" }}>
                        <Typography variant="h6" fontWeight="bold" marginLeft="30px">{category.displayName}</Typography>
                        {category.items.map((itemDetail, r) => (
                          itemDetail.qty > 0 && (
                            <div key={r} style={{ display: "flex", flexDirection: "column", marginLeft: "30px" }}>
                              <Stack direction="row" justifyContent="space-between" spacing={2} marginTop="20px">
                                <Typography variant="h6" sx={{ width: 200 }}>{itemDetail.displayName}</Typography>
                                <Typography variant="h6" fontWeight="bold">{itemDetail.qty}</Typography>
                              </Stack>
                            </div>
                          )
                        ))}
                     </div>
                    )
                  ))}
                </div>
              )}

            </div>
          ))}
        </Grid>
       
      </Grid>
    </Container>
  );
};

export default InventoryDetails;
