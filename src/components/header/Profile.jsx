import React, { useState } from "react";
import { Typography, Menu, Box, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function Profile({ account, setAccount }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAccount("");
    handleClose();
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography>{account}</Typography>
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
