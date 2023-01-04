import Layout from "../../components/Layout/index";
import {
  Stack,
  Container,
  Button,
  Paper,
  Box,
  Fab,
  Typography,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AddPhotoAlternate, RemoveCircle } from "@mui/icons-material";
import styles from "./styles.module.css";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ChromePicker } from "react-color";

function BuildStore() {
  const navigate = useNavigate()

  /** Basic Info - Logic **/
  const [URLStatus, setURLStatus] = useState(true);
  const [URLText, setURLText] = useState();

  const [storeName, setStoreName] = useState();
  const [storeURL, setStoreURL] = useState();
  const [deliveryTime, setDeliveryTime] = useState();
  const [deliveryFees, setDeliveryFees] = useState();
  const [minimumOrder, setMinimumOrder] = useState();
  const [whatsapp, setWhatsapp] = useState();

  useEffect(() => {
    const checkURL = async () => {
      const response = await fetch(
        `http://localhost:8000/api/checkURL/${storeURL}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.result, URLStatus, URLText);
        setURLStatus(data.result);
        setURLText(
          data.result ? "This URL is available" : "This URL is not available"
        );
      }
    };
    if (storeURL) checkURL();
  }, [storeURL, URLStatus, URLText]);

  /** Colors - logic **/
  const [colorOne, setColorOne] = useState({ hex: "#000000" });
  const [colorTwo, setColorTwo] = useState({ hex: "#000000" });
  const [currentColor, setCurrentColor] = useState("colorOne");
  const handleChangeColor = (color) => {
    currentColor === "colorOne" ? setColorOne(color) : setColorTwo(color);
  };

  /** Logo Logic  **/
  const [logoFile, setLogoFile] = useState();
  const [logo, setLogo] = useState();
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    setLogoFile(file); // send this to api
    const objectUrl = URL.createObjectURL(file);
    setLogo(objectUrl); // show this to user
  };

  /** Times logic **/
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const handleStartTime = (newValue) => {
    setStartTime(newValue);
  };

  const handleEndTime = (newValue) => {
    setEndTime(newValue);
  };

  /** handle submit - Logic **/
  const [storeNameError, setStoreNameError] = useState()
  const [storeURLError, setStoreURLError] = useState()
  const [deliveryTimeError, setDeliveryTimeError] = useState()
  const [deliveryFeesError, setDeliveryFeesError] = useState()
  const [minimumOrderError, setMinimumOrderError] = useState()
  const [whatsappError, setWhatsappError] = useState()
  const [logoError, setLogoError] = useState()

  const handleSubmitForm = () => {
    if (!storeName) setStoreNameError('Store Name is Required')
    if (!storeURL) setStoreURLError('Store URL is required')
    if (!deliveryTime) setDeliveryTimeError('Delivery Time is required')
    if (!deliveryFees) setDeliveryFeesError('Delivery Fees is required')
    if (!minimumOrder) setMinimumOrderError('Minimum Order is required')
    if (!whatsapp) setWhatsappError('whatsapp Number is required')
    if (!logo) setLogoError('Logo is required')

    // connect to page to api
    // to add the store 
    
    // navigate to another route
    // window.location.href = 'http://localhost:8000/welcome';
  };

  return (
    <Layout>
      <Container maxWidth="md" disableGutters>
        <Stack spacing={3} direction="column" sx={{ py: 2, mx: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#1976d2", mb: 2 }}
              variant="h6"
              component={"p"}
            >
              Edit Your Store Info
            </Typography>
            <Stack spacing={3} direction="column" sx={{ py: 2, mx: 2 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <TextField
                  label="Store Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setStoreName(e.target.value)}
                  error={!!storeNameError}
                  helperText={storeNameError}
                />
                <TextField
                  label="Store URL"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setStoreURL(e.target.value)}
                  helperText={!URLStatus ? URLText : storeURLError}
                  error={!URLStatus || !!storeURLError}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <TextField
                  label="Delivery Time"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  type="number"
                  inputProps={{ step: 1 }}
                  error={!!deliveryTimeError}
                  helperText={deliveryTimeError}
                />
                <TextField
                  label="Delivery Fees"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setDeliveryFees(e.target.value)}
                  type="number"
                  inputProps={{ step: 1 }}
                  error={!!deliveryFeesError}
                  helperText={deliveryFeesError}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <TextField
                  label="Minimum Order"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setMinimumOrder(e.target.value)}
                  type="number"
                  inputProps={{ step: 1 }}
                  error={!!minimumOrderError}
                  helperText={minimumOrderError}
                />
                <TextField
                  label="Whatsapp Number"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setWhatsapp(e.target.value)}
                  error={!!whatsappError}
                  helperText={whatsappError}
                />
              </Stack>
            </Stack>
          </Paper>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#1976d2", mb: 2 }}
              variant="h6"
              component={"p"}
            >
              Edit Theme Colors
            </Typography>
            <Stack direction={{ sm: "column", md: "row" }} spacing={4}>
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
                  value={colorOne.hex}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Secondary Color"
                  variant="outlined"
                  onClick={() => setCurrentColor("colorTwo")}
                  value={colorTwo.hex}
                />
              </Stack>
            </Stack>
          </Paper>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#1976d2", mb: 2 }}
              variant="h6"
              component={"p"}
            >
              Edit Your Logo
            </Typography>
            <Typography
              sx={{ color: "#dc3545", mb: 2 }}
              variant="body2"
              component={"p"}
            >
              {logoError}
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
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#1976d2", mb: 2 }}
              variant="h6"
              component={"p"}
            >
              Edit Opening and Closing Times
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={handleEndTime}
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
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display={"flex"} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{ m: 2 }}
                onClick={handleSubmitForm}
              >
                Start
              </Button>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Layout>
  );
}

export default BuildStore;
