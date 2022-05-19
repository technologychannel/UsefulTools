import {
  AppBar,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 300;

const BodyWrapper = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img src="/logo.png" alt="logo" style={{ height: 52, width: 52 }} />
        <Typography variant="h6" sx={{ fontWeight: "600", ml: 2 }}>
          Technology Channel App
        </Typography>
      </Toolbar>
      <Divider light fullWidth sx={{ borderColor: "#8d8d8d" }} />
      <List>
        {["Qr Generator"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{ fontWeight: "600", backgroundColor: "rgb(19 47 76)" }}
            >
              <ListItemText disableTypography primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#eaeded",
        minHeight: "100vh",
        maxHeight: "100%",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          display: { md: "none" },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#0A1929",
          color: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/logo.png" alt="logo" style={{ height: 52, width: 52 }} />
          <Typography variant="h6" sx={{ fontWeight: "600", ml: 2 }}>
            Technology Channel App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { md: "none", sm: "block", xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0A1929",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0A1929",
              color: "#fff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar
          sx={{
            display: { md: "none", sm: "block", xs: "block" },
          }}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default BodyWrapper;
