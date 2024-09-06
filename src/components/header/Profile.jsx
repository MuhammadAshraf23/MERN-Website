import React, {useState } from "react";
import { Typography, Menu, Box, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export default function Profile({account,setAccount}) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logOut=()=>{
    setAccount("")
  }
  return (
    <>
      <Box onClick={handleClick}>
        <Typography>{account}</Typography>{" "}
      </Box>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <Box sx={{display:'flex'}} onClick={logOut}>
     <PowerSettingsNewIcon />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Box>
      </Menu>
    </>
  );
}
