import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import usePrivacyGenerator from "../hooks/usePrivacyGenerator";

const PrivacyPolicy = () => {
  const {
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
    thirdparty,
    setThirdparty,
    email,
    setEmail,
    address,
    setAddress,
    generatePolicy,
    error
  } = usePrivacyGenerator();
  const matches = useMediaQuery("(max-width:1200px)");
  const matches1 = useMediaQuery("(max-width:500px)");
  return (
    <Grid container justifyContent="space-between" p={matches1 ? 0 : 4}>
      <Grid xs={matches ? 12 : 8}>
        <Typography variant="h4">Privacy Policy Generator</Typography>
        <Grid item xs={12} mt={4}>
          <form onSubmit={generatePolicy}>
            <Grid container spacing={2} flexDirection={matches1 && "column"}>
              <Grid item xs={matches1 ? 12 : 6}>
                <TextField
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={matches1 ? 12 : 6}>
                <TextField
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Website Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} flexDirection={matches1 && "column"}>
              <Grid item xs={matches1 ? 12 : 6} mt={2}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Company Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={matches1 ? 12 : 6} mt={2}>
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Website Address"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid mt={2}>
              <TextField
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                fullWidth
                id="outlined-basic"
                label="Company url"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              mt={2}
            >
              <Typography variant="h6">
                Do you use cookies in your website
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setCookie(true)}
                      checked={cookie}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setCookie(false)}
                      checked={!cookie}
                    />
                  }
                  label="No"
                />
              </FormGroup>
            </Grid>
            <Grid mt={2}>
              <Typography variant="h6">
                Do you show advertising through Google AdSense on your website?
              </Typography>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setAdvertise(true)}
                      checked={advertise}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setAdvertise(false)}
                      checked={!advertise}
                    />
                  }
                  label="No"
                />
              </FormGroup>
            </Grid>
            <Grid mt={2}>
              <Typography variant="h6">
                Do you show advertising from third parties (except Google)?
              </Typography>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setThirdparty(true)}
                      checked={thirdparty}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setThirdparty(false)}
                      checked={!thirdparty}
                    />
                  }
                  label="No"
                />
              </FormGroup>
            </Grid>
              <Typography color="error">{error}</Typography>
            <Grid mt={2}>
              <Button type="submit" variant="contained" color="info">
                Generate
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
