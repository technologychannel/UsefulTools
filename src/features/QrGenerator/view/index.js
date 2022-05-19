import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import QR from "./QR";
import QRForm from "./QRForm";

const QRGenerator = () => {
  const [QrType, setQrType] = useState();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Button color="primary" onClick={() => setQrType("text")}>
            Plain Text/URL
          </Button>
          <Button color="primary" onClick={() => setQrType("gps")}>
            GPS
          </Button>
          <Button color="primary" onClick={() => setQrType("mail")}>
            Mail
          </Button>
          <Button color="primary" onClick={() => setQrType("phone")}>
            Call
          </Button>
          <Button color="primary" onClick={() => setQrType("sms")}>
            SMS
          </Button>
          <Button color="primary" onClick={() => setQrType("wifi")}>
            Wifi
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={6} spacing={2}>
          <QRForm type={QrType} />
        </Grid>
        <Grid xs={6} item justifyContent="center" alignItems="center">
          <QR />
        </Grid>
      </Grid>
    </>
  );
};

export default QRGenerator;
