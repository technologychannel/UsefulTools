import { Grid, TextField } from "@mui/material";
import useQrGenerator from "../hooks/useQrGenerator";

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
              <TextField
                value={WifiAuthentication}
                onChange={(e) => setWifiAuthentication(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Authentication"
                variant="outlined"
              />
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
            <Grid item xs={12}>
              <TextField
                value={WifiHidden}
                onChange={(e) => setWifiHidden(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="Hidden"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default QRForm;
