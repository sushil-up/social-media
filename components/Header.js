"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut, useSession } from "next-auth/react";
import { errorMessage } from "./TostifyMessage";

function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { data: session, status } = useSession();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleSignOut = () => {
    errorMessage("Sign out Successfully!");
    signOut();
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar id="headerColor" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            S.M.D
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {session?.user?.email}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <button onClick={handleSignOut}>Sign out</button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
