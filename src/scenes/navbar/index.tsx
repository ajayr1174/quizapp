import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          {user.email && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hi, {user.email}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
