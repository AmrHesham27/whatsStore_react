import { Stack, TextField, Paper, Typography } from "@mui/material";
import { ChromePicker } from "react-color";
import { useState } from "react";

const EditColors = () => {
  const [colorOne, setColorOne] = useState({ hex: "#000000" });
  const [colorTwo, setColorTwo] = useState({ hex: "#000000" });
  const [currentColor, setCurrentColor] = useState("colorOne");
  const handleChangeColor = (color) => {
    currentColor === "colorOne" ? setColorOne(color) : setColorTwo(color);
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{color: '#1976d2', mb: 2}} variant="h6" component={'p'}>Edit Theme Colors</Typography>
      <Stack direction={{sm: 'column', md: 'row'}} spacing={4}>
        <ChromePicker
          disableAlpha
          color={currentColor === "colorOne" ? colorOne : colorTwo}
          onChange={handleChangeColor}
        />
        <Stack direction={"column"} spacing={3}>
          <TextField
            label="Main Color"
            variant="outlined"
            onClick={() => setCurrentColor("colorOne")}
            value={colorOne?.hex}
            fullWidth
            sx={{mt: 2}}
          />
          <TextField
            label="Secondary Color"
            variant="outlined"
            onClick={() => setCurrentColor("colorTwo")}
            value={colorTwo?.hex}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default EditColors;
