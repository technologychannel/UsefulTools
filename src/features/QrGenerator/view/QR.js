import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import QRCode from "qrcode.react";

const QR = () => {
  const Qrtext = useSelector((state) => state.QrTextSlice.data);
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
        size={256}
        value={Qrtext ? Qrtext : "http://technologychannel.org/"}
      />
    </Box>
  );
};

export default QR;
