import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import QRCode from "qrcode.react";
import { useMediaQuery } from "@mui/material";

const QR = () => {
  const Qrtext = useSelector((state) => state.QrTextSlice.data);
  const matches = useMediaQuery("(min-width:1100px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#eaeded",
      }}
    >
      <QRCode
        id="qr-gen"
        bgColor="#eaeded"
        includeMargin
        size={matches ? 400 : 256}
        level="H"
        value={Qrtext}
      />
    </Box>
  );
};

export default QR;
