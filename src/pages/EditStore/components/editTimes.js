import React, {useState} from "react";
import { Stack, TextField, Paper, Typography } from "@mui/material";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const EditTimes = () => {
    const [startTime, setStartTime] = useState(2);
    const [endTime, setEndTime] = useState(2);
  
    const handleStartTime = (newValue) => {
      setStartTime(newValue);
    };
  
    const handleEndTime = (newValue) => {
      setEndTime(newValue);
    };
  
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ color: "#1976d2", mb: 2 }} variant="h6" component={"p"}>Edit Opening and Closing Times</Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start Time"
              value={startTime}
              onChange={handleStartTime}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="End Time"
              value={endTime}
              onChange={handleEndTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
    </Paper>
  );
};

export default EditTimes;
