import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PolicySlice from "../../../redux/slices/PrivacyPolicy";

const usePrivacyGenerator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [cookie, setCookie] = useState(true);
  const [advertise, setAdvertise] = useState([]);
  const [error, setError] = useState(true);
  const [entityType, setEntityType] = useState("business");

  const generatePolicy = (e) => {
    e.preventDefault();
    const data = {
      companyName: companyName,
      websiteName: websiteName,
      email: email,
      address: address,
      url: url,
      cookie: cookie,
      advertise: advertise,
      entityType: entityType,
    };
    if (data?.entityType === "business") {
      if (companyName && websiteName && email && address && url) {
        dispatch(PolicySlice.actions.setData(data));
        navigate("/privacypolicy");
      } else {
        setError("Please fill all the Data.");
      }
    } else {
      if (websiteName && url) {
        dispatch(PolicySlice.actions.setData(data));
        navigate("/privacypolicy");
      } else {
        setError("Please fill all the Data.");
      }
    }
  };

  return {
    companyName,
    setCompanyName,
    websiteName,
    setWebsiteName,
    url,
    setUrl,
    cookie,
    setCookie,
    advertise,
    setAdvertise,
    email,
    setEmail,
    address,
    setAddress,
    generatePolicy,
    error,
    entityType,
    setEntityType,
  };
};

export default usePrivacyGenerator;
