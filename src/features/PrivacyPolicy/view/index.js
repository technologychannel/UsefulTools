import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
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
    email,
    setEmail,
    address,
    setAddress,
    generatePolicy,
    error,
    entityType,
    setEntityType,
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
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Website Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={matches1 ? 12 : 6}>
                <TextField
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Website url"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              mt={2}
            >
              <Typography variant="h6">Entity Type</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setEntityType("business")}
                      checked={entityType === "business" && true}
                    />
                  }
                  label="I'm a Business"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setEntityType("individual")}
                      checked={entityType === "individual" && true}
                    />
                  }
                  label="I'm an Individual"
                />
              </FormGroup>
            </Grid>
            <>
              <Grid container spacing={2} flexDirection={matches1 && "column"}>
                {entityType === "business" && (
                  <>
                    <Grid item xs={matches1 ? 12 : 6} mt={2}>
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
                    <Grid item xs={matches1 ? 12 : 6} mt={2}>
                      <TextField
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        fullWidth
                        id="outlined-basic"
                        label="Company Address"
                        variant="outlined"
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12} mt={2}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    label={
                      entityType === "business"
                        ? "Company Email"
                        : "Personal Email"
                    }
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </>
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
                Do you show advertising, Select Advertisment Platform?
              </Typography>

              <Autocomplete
                sx={{mt:2}}
                multiple
                id="tags-filled"
                options={[
                  "AdSense",
                  "Admob",
                  "FAN [Facebook Audience Network]",
                  "Mopub",
                  "Unity Ads",
                ]}
                freeSolo
                onChange={(e, v) => setAdvertise(v)}
                value={advertise}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // variant="filled"
                    label="Advertisment"
                    placeholder="Advertisment"
                  />
                )}
              />
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
