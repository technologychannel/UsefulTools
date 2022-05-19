import { Box } from "@mui/system";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const QR = () => {
  const Qrtext = useSelector((state) => state.QrTextSlice.data);
  return (
    <Box sx={{display:"flex",justifyContent:"center"}}>
      <QRCode value={Qrtext ? Qrtext : "http://technologychannel.org/"} />
    </Box>
  );
};

export default QR;
