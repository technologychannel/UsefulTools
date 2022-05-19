import styled from "@emotion/styled";
import {
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import useQrGenerator from "../hooks/useQrGenerator";

const MuiSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  marginRight: 20,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#110a0b",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#bfbfbf",
    opacity: 1,
  },
}));

const QRForm = (props) => {
  const {
    text,
    setText,
    Latitude,
    setLatitude,
    Longitude,
    setLongitude,
    mailTo,
    mailMessage,
    mailSubject,
    setMailTo,
    setMailMessage,
    setMailSubject,
    phoneNumber,
    setPhoneNumber,
    SMSPhoneNumber,
    SMSMessage,
    setSMSMessage,
    setSMSPhoneNumber,
    WifiAuthentication,
    WifiName,
    WifiPassword,
    WifiHidden,
    setWifiAuthentication,
    setWifiName,
    setWifiPassword,
    setWifiHidden,
  } = useQrGenerator();
  return (
    <>
      {(props.type === undefined || props?.type === "text") && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Link or text"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
      {props?.type === "gps" && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={Latitude}
                onChange={(e) => setLatitude(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Latitude"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={Longitude}
                onChange={(e) => setLongitude(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Longitude"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
      {props?.type === "mail" && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={mailTo}
                onChange={(e) => setMailTo(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="To"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={mailSubject}
                onChange={(e) => setMailSubject(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={mailMessage}
                onChange={(e) => setMailMessage(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Message"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
      {props?.type === "phone" && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
      {props?.type === "sms" && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={SMSPhoneNumber}
                onChange={(e) => setSMSPhoneNumber(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={SMSMessage}
                onChange={(e) => setSMSMessage(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Message"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
      {props?.type === "wifi" && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">
                Authentication
              </InputLabel>
              <Select
                fullWidth
                sx={{ marginTop: "16px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"nopass"}
                value={WifiAuthentication}
                label="Authentication"
                onChange={(e) => setWifiAuthentication(e.target.value)}
              >
                <MenuItem value="nopass">nopass</MenuItem>
                <MenuItem value="WPA">WPA</MenuItem>
                <MenuItem value="WPA2">WPA2</MenuItem>
                <MenuItem value="WPA3">WPA3</MenuItem>
                <MenuItem value="WEP">WEP</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={WifiName}
                onChange={(e) => setWifiName(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={WifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} ml={1}>
              <FormControlLabel
                control={
                  <MuiSwitch
                    color="secondary"
                    value={WifiHidden}
                    onChange={(e) => setWifiHidden(!WifiHidden)}
                  />
                }
                label="Hidden"
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default QRForm;
