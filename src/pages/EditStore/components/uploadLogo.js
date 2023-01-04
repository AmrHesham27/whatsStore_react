import React, { useState } from "react";
import { Stack, Paper, Typography, Fab } from "@mui/material";
import { AddPhotoAlternate, RemoveCircle } from "@mui/icons-material";
import styles from "../styles.module.css";

const UploadLogo = () => {
  const [logo, setLogo] = useState();

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    console.log(file); // send this to api
    const objectUrl = URL.createObjectURL(file);
    setLogo(objectUrl); // show this to user
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ color: "#1976d2", mb: 2 }} variant="h6" component={"p"}>
        Edit Your Logo
      </Typography>
      <Stack direction={"row"} spacing={3} sx={{ alignItems: "center" }}>
        <input
          accept="image/*"
          className={styles.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUploadClick}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span">
            <AddPhotoAlternate />
          </Fab>
        </label>
        {logo && (
          <Fab component="span">
            <RemoveCircle />
          </Fab>
        )}
        {logo && (
          <img
            src={logo}
            style={{ maxHeight: "120px", maxWidth: "400px" }}
            alt="logo"
          />
        )}
      </Stack>
    </Paper>
  );
};

export default UploadLogo;
