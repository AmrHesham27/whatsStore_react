import React from "react";
import { Paper, Typography, Stack, TextField } from "@mui/material";

const EditBasic = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ color: "#1976d2", mb: 2 }} variant="h6" component={"p"}>
        Edit Your Store Info
      </Typography>
      <Stack spacing={3} direction="column" sx={{ py: 2, mx: 2 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <TextField label="Store Name" variant="outlined" fullWidth  />
          <TextField label="Store URL" variant="outlined" fullWidth  />
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <TextField label="Delivery Time" variant="outlined" fullWidth  />
          <TextField label="Delivery Fees" variant="outlined" fullWidth  />
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <TextField label="Minimum Order" variant="outlined" fullWidth  />
          <TextField label="Whatsapp Number" variant="outlined" fullWidth  />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default EditBasic;
