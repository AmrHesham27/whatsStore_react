import Layout from "../../components/Layout/index";
import { Stack, Container, Button, Paper, Box } from "@mui/material";
import { useState } from "react";

// components
import EditColors from "./components/editColors.js";
import UploadLogo from "./components/uploadLogo";
import EditTimes from "./components/editTimes";
import EditBasic from "./components/editBasic";

function EditStore() {
  return (
    <Layout>
      <Container maxWidth="md" disableGutters>
        <Stack spacing={3} direction="column" sx={{ py: 2, mx: 2 }}>
          <EditBasic />
          <EditColors />
          <UploadLogo />
          <EditTimes />
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display={"flex"} sx={{ justifyContent: "center" }}>
              <Button variant="contained" sx={{ m: 2 }}>
                Edit
              </Button>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Layout>
  );
}

export default EditStore;
