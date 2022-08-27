import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const policy = useSelector((state) => state.PolicySlice.data);
  useEffect(() => {
    if (
      !policy.companyName &&
      !policy.websiteName &&
      !policy.url &&
      !policy.address &&
      !policy.email
    ) {
      navigate("/privacypolicygenerator");
    }
  }, []); // eslint-disable-line
  return (
    <Grid
      xs={6}
      sx={{
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5">
        Privacy Policy for{" "}
        {policy?.entityType === "company"
          ? policy.companyName
          : policy?.websiteName}
      </Typography>
      <Typography variant="body">
        At {policy.websiteName}, accessible from {policy.url}, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by{" "}
        {policy.websiteName} and how we use it. If you have additional questions
        or require more information about our Privacy Policy, do not hesitate to
        contact us. This Privacy Policy applies only to our online activities
        and is valid for visitors to our website with regards to the information
        that they shared and/or collect in {policy.websiteName}. This policy is
        not applicable to any information collected offline or via channels
        other than this website. Our Privacy Policy was created with the help of
        the TermsFeed Free Privacy Policy Generator.
      </Typography>
      <Box mt={2}>
        <Typography variant="h5">Data We Collect</Typography>
        <Typography variant="body">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5">Security</Typography>
        <Typography variant="body">
          We provide your best level of security from our side. Keeping all
          things remember that no method of transmission over the internet or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Typography>
      </Box>
      {policy.cookie && (
        <Box mt={2}>
          <Typography variant="h5">Cookies and Web Beacons</Typography>
          <Typography variant="body">
            Like any other website,{policy.websiteName} uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </Typography>
        </Box>
      )}
      {policy.advertise.length > 0 && (
        <Box mt={2}>
          <Typography variant="h5">Third-Party Ads Integration</Typography>
          <Typography variant="body">
            We may use third-party advertising services to serve ads to you.
            These third-party services may collect information about your visits
            to our site, other websites, or apps, including your device
            information, IP address, location, and browser type
          </Typography>
          <ul>
            {policy?.advertise?.map((value, index) => (
              <li style={{ overflow: "hidden" }}>{value}</li>
            ))}
          </ul>
        </Box>
      )}
      <Box mt={2}>
        <Typography variant="h5">Changes to This Privacy Policy</Typography>
        <Typography variant="body">
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5">Contact Us</Typography>
        <Typography variant="body">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at:
        </Typography>
        <ul>
          {policy?.email && <li>Email: {policy.email}</li>}
          {policy?.address && <li>Address: {policy.address} </li>}
          <li>
            <a href={policy.url}>Visit Website</a>
          </li>
        </ul>
      </Box>
    </Grid>
  );
};

export default PrivacyPolicyPage;
