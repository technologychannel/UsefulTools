import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import QrTextSlice from "../../../redux/slices/QrTextSlice";

const useQrGenerator = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  //Gps
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  //mail
  const [mailTo, setMailTo] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailMessage, setMailMessage] = useState("");

  //phone
  const [phoneNumber, setPhoneNumber] = useState();

  //sms
  const [SMSPhoneNumber, setSMSPhoneNumber] = useState();
  const [SMSMessage, setSMSMessage] = useState("");

  //wifi
  const [WifiAuthentication, setWifiAuthentication] = useState();
  const [WifiName, setWifiName] = useState("");
  const [WifiPassword, setWifiPassword] = useState("");
  const [WifiHidden, setWifiHidden] = useState();

  useEffect(() => {
    dispatch(QrTextSlice.actions.setData(text));
  }, [text]); // eslint-disable-line

  useEffect(() => {
    dispatch(
      QrTextSlice.actions.setData(
        "http://maps.google.com/maps?q=" + Latitude + "," + Longitude
      )
    );
  }, [Latitude, Longitude]); // eslint-disable-line

  useEffect(() => {
    dispatch(
      QrTextSlice.actions.setData(
        "mailto:" +
          mailTo +
          "?subject=" +
          mailSubject +
          "&body=" +
          mailMessage +
          ""
      )
    );
  }, [mailTo, mailSubject, mailMessage]); // eslint-disable-line

  useEffect(() => {
    dispatch(QrTextSlice.actions.setData("tel:" + phoneNumber));
  }, [phoneNumber]); // eslint-disable-line

  useEffect(() => {
    dispatch(
      QrTextSlice.actions.setData(`smsto:${SMSPhoneNumber}:${SMSMessage}`)
    );
  }, [SMSPhoneNumber, SMSMessage]); // eslint-disable-line

  useEffect(() => {
    dispatch(
      QrTextSlice.actions.setData(
        `WIFI:T:${WifiAuthentication};S:${WifiName};${WifiAuthentication !== 'nopass' ? `P:${WifiPassword};` : ''}H:${WifiHidden};`
      )
    );
  }, [WifiAuthentication, WifiHidden, WifiPassword, WifiHidden]); // eslint-disable-line

  return {
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
  };
};

export default useQrGenerator;
