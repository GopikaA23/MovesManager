import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";

const Calandar = () => {
  return(
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker/>
      </LocalizationProvider>
    </div>
  )
}

export default Calandar;