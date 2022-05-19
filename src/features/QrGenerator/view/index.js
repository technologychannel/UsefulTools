import { Button, Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QR from "./QR";
import QRForm from "./QRForm";

const QRGenerator = () => {
  const [QrType, setQrType] = useState();
  const Qrtext = useSelector((state) => state.QrTextSlice.data);
  const matches = useMediaQuery("(min-width:900px)");

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${Qrtext}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
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
      <Grid
        container
        spacing={4}
        mt={2}
        sx={{ display: "flex", flexDirection: { md: "row", sm: "column-reverse" } }}
      >
        <Grid item xs={matches ? 6 : 12} spacing={2}>
          <QRForm type={QrType} />
          <Button
            sx={{ marginTop: "16px" }}
            variant="contained"
            onClick={downloadQRCode}
          >
            Download QR Code
          </Button>
        </Grid>
        <Grid
          xs={matches ? 6 : 12}
          item
          justifyContent="center"
          alignItems="center"
        >
          <QR />
        </Grid>
      </Grid>
    </>
  );
};

export default QRGenerator;
