import React, { useState } from 'react';
import './App.css';
import { Button, Stack } from '@mui/material';
import MyMoves from './MyMoves';
import {
  LocalShipping as LocalShippingIcon,
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  ExitToAppRounded as ExitToAppRoundedIcon
} from '@mui/icons-material';

const buttonData = [
  { id: 'moves', label: 'My Moves', icon: <LocalShippingIcon fontSize='large' /> },
  { id: 'profile', label: 'MY PROFILE', icon: <PersonIcon fontSize='large' /> },
  { id: 'quote', label: 'GET QUOTE', icon: <AssessmentIcon fontSize='large' /> },
  { id: 'logout', label: 'LOGOUT', icon: <ExitToAppRoundedIcon fontSize='large' /> }
];

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };

  return (
    <>
      <Stack direction="column" spacing={2} sx={{ textAlign: 'start' }} style={{ position: 'fixed', top: '10px'}}>
        {buttonData.map(({ id, label, icon }) => (
          <Stack key={id} direction="row" spacing={2} alignItems="center">
            <Button
              onClick={() => handleButtonClick(id)}
              sx={{
                width: '200px',
                color: selectedButton === id ? "orangered" : "black",
                fontWeight: "bold"
              }}
              startIcon={icon}
            >
             {label}
            </Button>
          </Stack>
        ))}
      </Stack>

      {selectedButton === 'moves' && <MyMoves />}
    </>
  );
}

export default App;
